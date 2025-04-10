"use client";

import ModalCreationStatus from "@/src/components/pages/freight-forwarder/pages/services/ModalCreationStatus";
import { getRequest, postRequest } from "@/src/network/api";
import { Button, Form, Input, message } from "antd";
import React, { useEffect, useState } from "react";
import { CarrierType } from "./TypesCarrier";
import CarriersType from "../../form-helpers/CarriersType";
import CountriesDropDown from "../../form-helpers/CountriesDropDown";
import UploadImage from "../../form-helpers/UploadImage";

export default function NewCarrier({ slug }: { slug?: string }) {
  const [formInstance] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [carreir, setCarreir] = useState<CarrierType | null>();

  const showModal = () => setIsModalVisible(true);
  const closeModal = () => setIsModalVisible(false);

  useEffect(() => {
    if (slug && carreir) {
      formInstance.setFieldsValue({
        ...carreir,
        primaryName: carreir?.primaryName,
        code: carreir?.code,
        mode: carreir?.mode,
      });
    }
  }, [slug, carreir, formInstance]);

  useEffect(() => {
    if (slug) {
      getRequest(`/tazamun-freight-forwarder/api/v1/Carriers/${slug}`)
        .then((res) => {
          setCarreir(res?.data);
        })
        .catch((err) => console.log(err));
    }
  }, [slug]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onFinish = (values: any) => {
    setLoading(true);
    const body = {
      ...values,
      logo: "",
      secondaryName: values?.primaryName,
      status: 1,
    };
    postRequest("/tazamun-freight-forwarder/api/v1/Carriers", body)
      .then(() => {
        setLoading(false);
        showModal();
        message.success("200");
        // form.resetFields();
      })
      .catch((err) => {
        setLoading(false);
        message.error(err?.message);
      });
  };
  return (
    <>
      <Form
        form={formInstance}
        onFinish={onFinish}
        name="signup_form"
        layout="vertical"
        autoComplete="off"
        className="w-full"
        style={{ maxWidth: "400px" }}
      >
        <div className="flex flex-col gap-y-4  ">
          <Form.Item
            name="primaryName"
            label="Carrier Name *"
            rules={[
              { required: true, message: "Please enter your Carrier name" },
            ]}
          >
            <Input placeholder="Enter your Carrier name" />
          </Form.Item>
          <Form.Item
            name="code"
            label="Carrier Code *"
            rules={[
              { required: true, message: "Please enter your Carrier Code" },
            ]}
          >
            <Input placeholder="Enter your Carrier Code" />
          </Form.Item>
          <CarriersType />
          <CountriesDropDown
            label="Country"
            name="countryId"
            isMultiple={false}
            intialCountry={carreir?.country}
          />
          <UploadImage name="logo" label="Carrier logo" />
        </div>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="mt-6"
            loading={loading}
          >
            save carrier
          </Button>
        </Form.Item>
      </Form>
      <ModalCreationStatus
        isSuccessModalVisible={isModalVisible}
        closeSuccessModal={closeModal}
        title="Carrier has been saved successfully"
        description="You can now use this carrier in your rates"
        btnText="Go to carrier"
        hrefBtn="/carriers"
        status="success"
      />
    </>
  );
}
