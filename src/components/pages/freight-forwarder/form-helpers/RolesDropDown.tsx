import { rolesType } from "@/src/network/eNum";
import { Form, Select } from "antd";
import React from "react";

export default function RolesDropDown() {
  return (
    <Form.Item
      name="Role"
      label={"Role" + "*"}
      required={false}
      rules={[{ required: true, message: "Please enter your mode" }]}
    >
      <Select
        options={Object.entries(rolesType).map(([key, value]) => ({
          value: value,
          label: key,
        }))}
      />
    </Form.Item>
  );
}
