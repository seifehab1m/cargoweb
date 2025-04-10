"use client";
import { Button, Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useTranslations } from "next-intl";
import React from "react";

export default function ContactForm() {
  const t = useTranslations("contact_us");
  const trans = useTranslations("");
  return (
    <div className=" pt-14">
      <div className="bg-white p-6 max-w-[480px] rounded-3xl text-start shadow-gray-2xl xl:ms-auto">
        <h2 className="text-lg text-greenishBlack font-medium pb-3">
          {t("get_in_touch")}
        </h2>
        <p className="text-sm text-darkGray pb-5">
          {t("you_can_reach_us_anytime")}
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
            name="fullName"
            label={t("full_name") + "*"}
            required={false}
            rules={[
              { required: true, message: "Please enter your fullName" },
              // { type: "fullName", message: "Please enter a valid fullName" },
            ]}
          >
            <Input />
          </Form.Item>
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
          <Form.Item
            name="message"
            label={t("message") + "*"}
            required={false}
            rules={[
              { required: true, message: "Please enter your message" },
              // { type: "fullName", message: "Please enter a valid fullName" },
            ]}
          >
            <TextArea rows={4} placeholder="" maxLength={6} />
          </Form.Item>
          <Form.Item className="mt-9">
            <Button type="primary" htmlType="submit" block>
              {t("submit")}
            </Button>
          </Form.Item>
        </Form>
        <p className="max-w-[310px] w-full mx-auto text-sm text-center text-darkGray ">
          {t("by_contacting_us")}{" "}
          <span className="cursor-pointer text-primaryLight">
            {trans("terms_conditions")}
          </span>{" "}
          {trans("and")}{" "}
          <span className="cursor-pointer text-primaryLight">
            {trans("privacy_policy")}
          </span>
        </p>
      </div>
    </div>
  );
}
