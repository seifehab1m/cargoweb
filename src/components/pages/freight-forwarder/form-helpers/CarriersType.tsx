import { carrierType } from "@/src/network/eNum";
import { Form, Select } from "antd";
import React from "react";

export default function CarriersType() {
  return (
    <Form.Item
      name="type"
      label={"Carriers Type"}
      required={false}
      rules={[{ required: false, message: "Please enter your carriers Type" }]}
    >
      <Select
      placeholder="Select Carrier Type"
        options={Object.entries(carrierType).map(([key, value]) => ({
          value: value,
          label: key,
        }))}
      />
    </Form.Item>
  );
}
