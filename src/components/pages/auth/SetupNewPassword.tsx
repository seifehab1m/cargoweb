"use client";
import { Form, Input } from "antd";

export default function SetupNewPassword() {
  return (
    <>
      <Form.Item
        name="password"
        label="Password *"
        rules={[
          { required: true, message: "Please enter your password" },
          {
            pattern: /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/,
            message:
              "Password must be at least 8 characters, include one uppercase letter and one number",
          },
        ]}
        hasFeedback
      >
        <Input.Password placeholder="Enter your password" />
      </Form.Item>

      {/* Confirm Password */}
      <Form.Item
        name="newPassword"
        label="Confirm Password *"
        dependencies={["password"]}
        rules={[
          { required: true, message: "Please confirm your password" },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error("The two passwords do not match")
              );
            },
          }),
        ]}
        hasFeedback
      >
        <Input.Password placeholder="Confirm your password" />
      </Form.Item>
    </>
  );
}
