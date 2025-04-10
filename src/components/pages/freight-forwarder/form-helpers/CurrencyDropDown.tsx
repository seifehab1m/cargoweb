import { CurrencyOptions } from "@/src/network/eNum";
import { Form, Select } from "antd";
import React from "react";

export default function CurrencyDropDown() {
  return (
    <Form.Item
      label="Currency"
      name="currency"
    //   rules={[{ required: true, message: "Please select Currency" }]}
    >
      <Select
        options={Object.entries(CurrencyOptions).map(([key, value]) => ({
          value,
          label: key,
        }))}
        placeholder="Select Currency"
      />
    </Form.Item>
  );
}
