"use client";

import { TitleIcon } from "@/src/assets/images/freight-forwarder/title";
import { Form, Input, Button, message } from "antd";
import React, { useEffect, useState } from "react";
import { getRequest, postRequest, putRequest } from "@/src/network/api";
import Loading from "@/src/components/shared/loading/Loading";
import { ItemTypeOriginsAndDestinations } from "../../freight-forwarder/form-helpers/formTypes";
import OriginsAndDestinationsTreeSelect from "../../freight-forwarder/form-helpers/origins-and-destinations-services/OriginsAndDestinationsTreeSelect";
import NewServiceLayout from "../../freight-forwarder/layouts/NewServiceLayout";
import DropDownCarrier from "../../freight-forwarder/form-helpers/CarrierDropDown";
import DeumurrageAndDetentionForm from "./DeumurrageAndDetentionForm";

export default function NewDemurrageAndDetention({ slug }: { slug?: string }) {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [ServiceLoading, setServiceLoading] = useState(false);
  const [feeData, setFeeData] = useState([]);
  const [origins, setOrigins] = useState<ItemTypeOriginsAndDestinations[]>([]);
  const [destinations, setDestinations] = useState<
    ItemTypeOriginsAndDestinations[]
  >([]);
  interface ServiceType {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    perUnitFees?: any[];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
  }

  const [service, setService] = useState<ServiceType>({ perUnitFees: [] });

  useEffect(() => {
    if (slug) {
      setServiceLoading(true);
      getRequest(`/tazamun-freight-forwarder/api/v1/Services/${slug}`)
        .then((res) => {
          setService(res?.data);
          setServiceLoading(false);
          form.setFieldsValue({
            ...res?.data,
            origins: undefined,
            destinations: undefined,
          });
          setFeeData(res?.data?.perUnitFees);
        })
        .catch(() => {
          setServiceLoading(false);
          message.error("An error occurred while fetching the service.");
        });
    }
  }, [slug, form]);

  console.log("serddsvice", service);

  if (ServiceLoading) return <Loading />;

  //eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onFinish = async (values: any) => {
  

    setLoading(true);

    try {
      const body = {
        ...values,
        origins,
        destinations,
        perUnitFees: feeData,
        status: 1,
      };

      const request = slug
        ? putRequest(`/tazamun-freight-forwarder/api/v1/Services/${slug}`, body)
        : postRequest("/tazamun-freight-forwarder/api/v1/Services", body);

      await request;

      message.success(
        slug ? "Service Edited successfully" : "Service created successfully"
      );
      form.resetFields();
      setFeeData([]);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      message.error(
        error?.message || `Error ${slug ? "editing" : "creating"} service`
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="container py-10">
      <div className="flex items-center gap-2 pb-11">
        <TitleIcon />
        <h2 className="text-[32px] font-medium text-[#191919]">
          {slug ? "Edit" : "New"} Service
        </h2>
      </div>
      <Form
        form={form}
        name="register"
        onFinish={onFinish}
        layout="vertical"
        style={{
          margin: "0 auto",
        }}
      >
        <div className="flex flex-col gap-6">
          <NewServiceLayout title="Demurrage & Detention">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 gap-y-6 ">
              <Form.Item name="fullName" label=" Role Name ">
                <Input placeholder="Enter your  role name" />
              </Form.Item>
              <Form.Item name="desc" label=" Description ">
                <Input placeholder="Enter your  Description " />
              </Form.Item>
              <DropDownCarrier />
              <div className="col-span-3">
                <OriginsAndDestinationsTreeSelect
                  name="origins"
                  label="Origins (countries | ports)"
                  setOptions={setOrigins}
                  required
                  intailValue={service}
                />
              </div>
              <div className="col-span-3">
                <OriginsAndDestinationsTreeSelect
                  name="destinations"
                  label="Destinations (countries | ports)"
                  setOptions={setDestinations}
                  required
                />
              </div>
            </div>
          </NewServiceLayout>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <NewServiceLayout title="Demurrage ">
            <DeumurrageAndDetentionForm />
          </NewServiceLayout>
          <NewServiceLayout title="Detention ">
            <DeumurrageAndDetentionForm isDeumrrage={false} />
          </NewServiceLayout>
        </div>
        <Form.Item>
          <Button
            className="mt-9 !w-[105px] "
            type="primary"
            htmlType="submit"
            block
            loading={loading}
          >
            Save
          </Button>
        </Form.Item>
      </Form>
    </main>
  );
}
