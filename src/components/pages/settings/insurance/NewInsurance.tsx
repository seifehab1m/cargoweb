"use client";

import { Form, Input, Button, message, Checkbox, Radio, Select } from "antd";
import React, { useEffect, useState } from "react";
import TextArea from "antd/es/input/TextArea";
import { getRequest, postRequest, putRequest } from "@/src/network/api";
import Loading from "@/src/components/shared/loading/Loading";
import { ItemTypeOriginsAndDestinations } from "../../freight-forwarder/form-helpers/formTypes";
import NewServiceLayout from "../../freight-forwarder/layouts/NewServiceLayout";
import ModeDropDown from "../../freight-forwarder/form-helpers/ModeDropDown";
import InsuranceFee from "../../freight-forwarder/form-helpers/InsuranceFee";
import OriginsAndDestinationsTreeSelect from "../../freight-forwarder/form-helpers/origins-and-destinations-services/OriginsAndDestinationsTreeSelect";
import DatePickerFormItem from "../../freight-forwarder/form-helpers/DatePickerFormItem";
import HSCodeDropDown from "../../freight-forwarder/form-helpers/HSCodeDropDown";
import { CurrencyOptions } from "@/src/network/eNum";
import FlatFeeInsurance from "./FlatFeeInsurance";
import MainHeader from "@/src/components/shared/main-header/MainHeader";

export default function NewInsurance({ slug }: { slug?: string }) {
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
  const [hsCodeLookups, setHsCodeLookups] = useState([]);
  const [selectedOption, setSelectedOption] = useState(1);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleRadioChange = (e: any) => {
    setSelectedOption(e.target.value);
    console.log("Selected:", e.target.value);
  };

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
        hsCodeLookups,
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
      <MainHeader title="New Insurance" />
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
          <NewServiceLayout title="Insurance Configurations">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 gap-y-6 ">
              <Form.Item
                name="Policy Name"
                label={"Policy Name"}
                required={false}
              >
                <Input />
              </Form.Item>
              <InsuranceFee />
              <ModeDropDown intailValue={service} />
              <OriginsAndDestinationsTreeSelect
                name="origins"
                label="Origins (countries)"
                setOptions={setOrigins}
                required
                intailValue={service}
              />
              <OriginsAndDestinationsTreeSelect
                name="destinations"
                label="Destinations (countries)"
                setOptions={setDestinations}
                required
              />
              <Form.Item
                name="description"
                label={"Description"}
                required={false}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="Commodaties"
                label={"Commodaties"}
                required={false}
              >
                <Input />
              </Form.Item>
              <DatePickerFormItem label="Valid From" name="validFrom" />
              <DatePickerFormItem label="Valid To" name="validTo" />
            </div>
            <HSCodeDropDown setHsCodeLookups={setHsCodeLookups} />
            <Form.Item name="Commodaties" required={false} className="!mt-6">
              <Checkbox value="service 1">
                Apply on hazardous shipments
              </Checkbox>
            </Form.Item>
          </NewServiceLayout>

          <NewServiceLayout title="Insurance Pricing">
            <Form.Item
              className="!pb-6"
              label="Based on"
              name="percentageCalculationType"
              initialValue={selectedOption}
            >
              <Radio.Group onChange={handleRadioChange}>
                <Radio value={1}>Premium</Radio>
                <Radio value={2}>Flat fee</Radio>
              </Radio.Group>
            </Form.Item>
            {selectedOption === 1 ? (
              <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 gap-y-6 ">
                <Form.Item
                  name="Premium %"
                  label={"Premium %"}
                  required={false}
                >
                  <Input />
                </Form.Item>
                <div className="flex items-center gap-2">
                  <Form.Item
                    className="w-2/3"
                    name="Minimum insurance value"
                    label={"Minimum insurance value"}
                    required={false}
                  >
                    <Input placeholder="0.00" />
                  </Form.Item>
                  <Form.Item
                    className="w-1/3"
                    label="Currency *"
                    name="currency"
                    rules={[
                      { required: true, message: "Please select Currency" },
                    ]}
                  >
                    <Select
                      options={Object.entries(CurrencyOptions).map(
                        ([key, value]) => ({
                          value,
                          label: key,
                        })
                      )}
                      placeholder=" Currency"
                    />
                  </Form.Item>
                </div>

                <Form.Item
                  name="Plussage %"
                  label={"Plussage %"}
                  required={false}
                >
                  <Input />
                </Form.Item>
              </div>
            ) : (
              <FlatFeeInsurance />
            )}
            <Form.Item
              className="!pt-6"
              name="message"
              label={"Comments (to be shown in the price quote)"}
              required={false}
              rules={[
                { required: true, message: "Please enter your comment" },
                // { type: "fullName", message: "Please enter a valid fullName" },
              ]}
            >
              <TextArea rows={3} placeholder="" />
            </Form.Item>
          </NewServiceLayout>
        </div>

        <Form.Item>
          <Button
            className="mt-9 !w-fit "
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
