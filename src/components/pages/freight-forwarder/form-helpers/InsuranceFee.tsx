import { insuranceFeeType } from "@/src/network/eNum";
import { Form, Select } from "antd";
import React from "react";

export default function InsuranceFee() {
  return (
    <Form.Item
      name="mode"
      label={"insurance fee" + "*"}
      required={false}
      rules={[{ required: true, message: "Please enter your mode" }]}
    >
      <Select
        options={Object.entries(insuranceFeeType).map(([key, value]) => ({
          value: value,
          label: key,
        }))}
      />
    </Form.Item>
  );
}
