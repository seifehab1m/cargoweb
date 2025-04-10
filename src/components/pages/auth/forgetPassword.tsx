"use client";
import { Form, Input, Button, message } from "antd";
import SetupNewPassword from "./SetupNewPassword";
import { useState } from "react";
import { BASEURL, postRequest } from "@/src/network/api";
import { useRouter } from "@/src/i18n/routing";

export default function ForgetPassword() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onFinish = (values: any) => {
    if (!showPassword) setEmail(values?.email);
    setShowPassword(true);
    console.log(values, "adda");
    
    if (showPassword) {
      setLoading(true);
      postRequest(
        "/Auth/change-password",
        { ...values, email },
        {},
        BASEURL.USER
      )
        .then(() => {
          setLoading(false);
          message.success("Password reset successfully");
           router.push("/login");
        })
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .catch((err: any) => {
          setLoading(false);
          message.error(err);
        });
    }
  };
  return (
    <Form
      onFinish={onFinish}
      name="signup_form"
      layout="vertical"
      autoComplete="off"
      className="w-full"
      style={{ maxWidth: "400px" }}
    >
      <div className="flex flex-col gap-y-6 pt-8 ">
        {!showPassword && (
          <Form.Item
            name="email"
            label="Email *"
            rules={[
              { required: true, message: "Please enter your email" },
              { type: "email", message: "Please enter a valid email" },
            ]}
          >
            <Input placeholder="Enter your email" />
          </Form.Item>
        )}

        {showPassword && <SetupNewPassword />}
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="w-full"
            loading={loading}
          >
            Reset Password
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
}
