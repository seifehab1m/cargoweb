import { officeType } from "@/src/network/eNum";
import { Form, Select } from "antd";
import React from "react";

export default function OfficeDropDown() {
  return (
    <Form.Item
      label="Office *"
      name="Office"
      // rules={[{ required: false, message: "Please select Currency" }]}
    >
      <Select
        options={Object.entries(officeType).map(([key, value]) => ({
          value,
          label: key,
        }))}
        placeholder="Select Office"
      />
    </Form.Item>
  );
}
