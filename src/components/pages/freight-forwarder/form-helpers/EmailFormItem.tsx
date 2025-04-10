import { Form, Input } from "antd";
import React from "react";

export default function EmailFormItem() {
  return (
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
  );
}
