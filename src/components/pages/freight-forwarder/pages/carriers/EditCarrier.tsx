"use client";

import CarrierForm from "@/src/components/pages/freight-forwarder/pages/carriers/CarrierForm";
import { getRequest, putRequest } from "@/src/network/api";
import { Form, message } from "antd";
import React, { useEffect, useState } from "react";
import { CarrierType } from "./TypesCarrier";

export default function EditCarrier({ slug }: { slug: string }) {
  const [formInstance] = Form.useForm();
  const [data, setData] = useState<CarrierType | null>();

  useEffect(() => {
    if (slug) {
      getRequest(`/tazamun-freight-forwarder/api/v1/Carriers/${slug}`)
        .then((res) => {
          setData(res?.data);
        })
        .catch((err) => console.log(err));
    }
  }, [slug]);

  useEffect(() => {
    if (slug && data) {
      formInstance.setFieldsValue({
        primaryName: data?.primaryName,
        code: data?.code,
        countryId: data?.countryId,
        mode: data?.mode,
      });
    }
  }, [slug, data, formInstance]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onFinish = (values: any) => {
    const body = { ...values, logo: "", secondaryName: values?.primaryName };
    putRequest(`/tazamun-freight-forwarder/api/v1/Carriers/${slug}`, body)
      .then(() => message.success("200"))
      .catch((err) => {
        const errorMessage =
          err?.response?.data?.message ||
          err?.message ||
          "Something went wrong";
        message.error(errorMessage);
      });
  };
  return (
    <Form
      form={formInstance}
      onFinish={onFinish}
      name="signup_form"
      layout="vertical"
      autoComplete="off"
      className="w-full"
      style={{ maxWidth: "400px" }}
    >
      <CarrierForm />
    </Form>
  );
}
