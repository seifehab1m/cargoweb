"use client";
import { Button, Form, Input, message } from "antd";
import React from "react";
import { postRequest } from "@/src/network/api";
import dayjs from "dayjs";
import RolesDropDown from "../../freight-forwarder/form-helpers/RolesDropDown";
import OfficeDropDown from "../../freight-forwarder/form-helpers/OfficeDropDown";

export default function UserForm() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onFinish = async (values: any) => {
    if (
      values?.validFrom &&
      values?.validTo &&
      dayjs(values?.validFrom).isAfter(values?.validTo)
    ) {
      message.error("Valid From date cannot be after Valid To date.");
      return;
    }

    const body = {
      ...values,
      validFrom: values.validFrom
        ? dayjs(values.validFrom).toISOString()
        : null,
      validTo: values.validTo ? dayjs(values.validTo).toISOString() : null,
      status: "Active",
    };

    postRequest("/tazamun-freight-forwarder/api/v1/Tariff", body)
      .then((res) => console.log("res", res))
      .catch(() => message.error("Error submitting form"));
  };

  return (
    <Form
      name="register"
      onFinish={onFinish}
      layout="vertical"
      style={{
        maxWidth: "75%",
      }}
    >
      <div className={`grid md:grid-cols-2 grid-cols-1 gap-3 gap-y-6`}>
        <Form.Item
          name="name"
          label={"First Name" + "*"}
          required={false}
          rules={[{ required: true, message: "Please enter name" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="name"
          label={"Last Name" + "*"}
          required={false}
          rules={[{ required: true, message: "Please enter name" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email *"
          rules={[
            { message: "Please enter your email" },
            { type: "email", message: "Please enter a valid email" },
          ]}
        >
          <Input placeholder="Enter your email" />
        </Form.Item>
        <Form.Item
          name="contactNumber"
          label={"Phone number" + "*"}
          required={false}
          rules={[{ required: true, message: "" }]}
        >
          <Input type="number" />
        </Form.Item>

        <OfficeDropDown />
        <RolesDropDown />
      </div>
      <Form.Item>
        <Button
          className="mt-7 !w-[105px] "
          type="primary"
          htmlType="submit"
          block
        >
          Save Changes
        </Button>
      </Form.Item>
    </Form>
  );
}
