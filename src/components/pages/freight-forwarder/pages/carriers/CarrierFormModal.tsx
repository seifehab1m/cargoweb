"use client";
import { TransportMode } from "@/src/network/eNum";
import { Button, Form, Input, Select } from "antd";
import React from "react";
import CountriesDropDown from "../../form-helpers/CountriesDropDown";
import UploadImage from "../../form-helpers/UploadImage";

export default function CarrierFormModal({
  isTarrifModal = false,
}: {
  isTarrifModal?: boolean;
}) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  //   const onFinish = async (values: any) => {
  //     if (
  //       values?.validFrom &&
  //       values?.validTo &&
  //       dayjs(values?.validFrom).isAfter(values?.validTo)
  //     ) {
  //       message.error("Valid From date cannot be after Valid To date.");
  //       return;
  //     }

  //     const body = {
  //       ...values,
  //       validFrom: values.validFrom
  //         ? dayjs(values.validFrom).toISOString()
  //         : null,
  //       validTo: values.validTo ? dayjs(values.validTo).toISOString() : null,
  //       status: "Active",
  //     };

  //     postRequest("/tazamun-freight-forwarder/api/v1/Tariff", body)
  //       .then((res) => console.log("res", res))
  //       .catch(() => message.error("Error submitting form"));
  //   };

  return (
    <Form
      name="register"
      //   onFinish={onFinish}
      layout="vertical"
      //   style={{
      //     maxWidth: !isTarrifModal ? "75%" : "100%",
      //   }}
    >
      <div
        className={`grid md:grid-cols-2 grid-cols-1 ${
          isTarrifModal ? " gap-3" : "gap-4 gap-y-6"
        } `}
      >
        <Form.Item
          name="name"
          label={"carrier Name" + "*"}
          required={false}
          rules={[{ required: true, message: "Please enter name" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="carrierCode"
          label={"Carrier Code" + "*"}
          required={false}
          rules={[{ required: true, message: "" }]}
        >
          <Input type="number" />
        </Form.Item>
        <CountriesDropDown />
        <Form.Item
          name="mode"
          label={"Type" + "*"}
          required={false}
          rules={[{ required: true, message: "Please enter your Type" }]}
        >
          <Select
            options={Object.entries(TransportMode).map(([key, value]) => ({
              value: value,
              label: key,
            }))}
          />
        </Form.Item>
      </div>
      <UploadImage />
      <Form.Item>
        <Button
          className="mt-7 "
          type="primary"
          htmlType="submit"
          block
        >
          Save 
        </Button>
      </Form.Item>

      {/* {!isTarrifModal ? (
        <Form.Item>
          <Button
            className="mt-7 !w-[105px] "
            type="primary"
            htmlType="submit"
            block
          >
            Save Tarrif
          </Button>
        </Form.Item>
      ) : (
        <div className="mt-5 flex gap-3 items-center">
          <Button
            className="w-full !shadow-none !text-sm "
            type="primary"
            htmlType="submit"
          >
            Apply
          </Button>
          <Button
            type="primary"
            className="w-full !text-sm !shadow-none   !bg-[#FAFAFA] !text-darkGray  !border-[#D5D7DA]"
          >
            Cancel
          </Button>
        </div>
      )} */}
    </Form>
  );
}
