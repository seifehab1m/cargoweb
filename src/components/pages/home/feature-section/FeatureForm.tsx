"use client";
import { Button, Form, Input } from "antd";
import { useTranslations } from "next-intl";
import React from "react";


export default function FeatureForm() {
  const t=useTranslations('contact_us')
  return (
    <div className="bg-white p-6 w-full md:max-w-[480px] h-fit rounded-3xl text-center shadow-gray-2xl ms-auto">
      <h2 className="text-lg text-greenishBlack pb-5">
        {t("join_now_and_streamline_your_shipping_process")}
      </h2>
      <Form
        name="register"
        layout="vertical"
        // onFinish={onFinish}
        style={{
          // width: "400px",
          margin: "0 auto",
        }}
        className="flex flex-col gap-4"
      >
        <Form.Item
          name="fullname"
          label={t('full_name') + "*"}
          required={false}
          rules={[
            { required: true, message: "Please enter your Full Name" },
            { type: "email", message: "Please enter a valid Full Name" },
          ]}
        >
          <Input  />
        </Form.Item>
        <Form.Item
          name="company Name"
          label={t('company_name') + "*"}
          required={false}
          rules={[
            { required: true, message: "Please enter your company Name" },
            { min: 6, message: "Must be at least 6 characters" },
          ]}
        >
          <Input  />
        </Form.Item>
        <Form.Item
          name="email"
          label={t('email') + "*"}
          required={false}
          rules={[
            { required: true, message: "Please enter your email" },
            { type: "email", message: "Please enter a valid email" },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item className="mt-9">
          <Button className="!text-base" ghost type="primary" htmlType="submit" block>
            {t("Continue")}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
