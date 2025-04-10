"use client";
import { Button, Form, Input } from "antd";
import { useTranslations } from "next-intl";
import React from "react";

export default function ReachUsForm() {
  const t = useTranslations("contact_us");
  const tReachSection = useTranslations("home.Reach_to_us_section");

  return (
    <div className="bg-white p-6 max-w-[480px] rounded-3xl text-center shadow-gray-2xl xl:ms-auto">
      <h2 className="text-lg text-greenishBlack font-medium pb-1">
        {tReachSection("form_title")}
      </h2>
      <p className="text-sm text-darkGray pb-2">
        {tReachSection("form_description")}
      </p>
      <Form
        name="register"
        layout="vertical"
        // onFinish={onFinish}
        style={{
          margin: "0 auto",
        }}
      >
        <Form.Item
          name="email"
          label={t("email") + "*"}
          required={false}
          rules={[
            { required: true, message: "Please enter your email" },
            { type: "email", message: "Please enter a valid email" },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item className="!mt-4">
          <Button ghost type="primary" htmlType="submit" block>
            <span className="!font-medium"> {t("subscribe")} </span>
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
