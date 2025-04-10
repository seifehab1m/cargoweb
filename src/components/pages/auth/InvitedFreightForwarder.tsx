"use client";
import { Button, Form, message } from "antd";
import React, { useState } from "react";
import SignupItems from "./signupItems";
import { useRouter } from "@/src/i18n/routing";
import { BASEURL, postRequest } from "@/src/network/api";

export default function InvitedFreightForwarder() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onFinish = (values: any) => {
    setLoading(true);
    postRequest("/FreightForwarderUser/invite", values, {}, BASEURL.USER)
      .then((res) => {
        setLoading(false);
        message.success("Signup successful");
        router.push("/services");
        console.log(res, "dmdd");
      })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .catch((err: any) => {
        console.log(err, "dmdd");
        setLoading(false);
        message.error("Sorry, the user is not authorized to log in");
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
        <SignupItems finishingSetup />
        <Form.Item>
          <Button
            className="mt-4"
            type="primary"
            htmlType="submit"
            block
            loading={loading}
          >
            Signup
          </Button>
        </Form.Item>
      </>
    </Form>
  );
}
