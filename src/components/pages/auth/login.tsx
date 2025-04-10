"use client";
import { Form, Input, Checkbox, Button, message } from "antd";
import Link from "next/link";
import { BASEURL, postRequest } from "@/src/network/api";
import { useRouter } from "@/src/i18n/routing";
import { useState } from "react";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onFinish = (values: any) => {
    setLoading(true);
    postRequest("/Auth/login", values, {}, BASEURL.USER)
      .then(() => {
        setLoading(false);
        message.success("Login successful");
        router.push("/services");
      })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .catch((err: any) => {
        setLoading(false);
        message.error(err?.[0]?.message);
      });
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
          name="password"
          label="Password *"
          rules={[{ message: "Please enter your password" }]}
        >
          <Input.Password placeholder="Enter your password" />
        </Form.Item>

        <div className="flex justify-between items-center">
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember Me</Checkbox>
          </Form.Item>
          <Link href="/forget-password" className="text-primaryLight">
            Forgot your password?
          </Link>
        </div>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="w-full" loading={loading}>
            sign in
          </Button>
        </Form.Item>
        <div className="flex gap-1 pt-2">
          <h6>Dont have an account yet? </h6>
          <Link href="/sign-up" className="text-primaryLight">
            Sign up for free
          </Link>
        </div>
      </div>
    </Form>
  );
}
