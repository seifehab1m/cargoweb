"use client";
import { Button, Form, message } from "antd";
import React, { useState } from "react";
import Link from "next/link";
import SignupItems from "./signupItems";
import { BASEURL, postRequest } from "@/src/network/api";
import { useRouter } from "@/src/i18n/routing";

export default function Signup() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onFinish = (values: any) => {
    setLoading(true);
    postRequest("/FreightForwarderUser/signup", values, {}, BASEURL.USER)
      .then(() => {
        setLoading(false);
        message.success("Signup successful");
        router.push("/verificationCode");
      })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .catch((err: any) => {
        setLoading(false);
        message.error(err);
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
      <>
        <SignupItems />
        <Form.Item>
          <Button className="mt-4" type="primary" htmlType="submit" block loading={loading}>
            Signup
          </Button>
        </Form.Item>
      </>
      <div className="flex gap-2 pt-4">
        <h6> Already have an account? </h6>
        <Link href="/login" className="text-primaryLight">
          sign in
        </Link>
      </div>
    </Form>
  );
}
