"use client";
import { Checkbox, Form, Input } from "antd";
import React from "react";
import CountriesDropDown from "../freight-forwarder/form-helpers/CountriesDropDown";
import Link from "next/link";

export default function SignupItems({
  finishingSetup = false,
}: {
  finishingSetup?: boolean;
}) {
  return (
    <>
      <div className="flex flex-col gap-y-5 pt-8">
        {/* First Name */}
        <Form.Item
          label="First Name"
          name="firstName"
          rules={[{ required: true, message: "Please enter your first name" }]}
        >
          <Input placeholder="Enter your first name" />
        </Form.Item>

        {/* Last Name */}
        <Form.Item
          label="Last Name"
          name="lastName"
          rules={[{ required: true, message: "Please enter your last name" }]}
        >
          <Input placeholder="Enter your last name" />
        </Form.Item>

        {/* Company Name & Countries DropDown (only when finishingSetup is false) */}
        {!finishingSetup && (
          <>
            <Form.Item
              label="Company Name"
              name="companyName"
              rules={[
                { required: true, message: "Please enter your company name" },
              ]}
            >
              <Input placeholder="Enter your company name" />
            </Form.Item>
            <CountriesDropDown isMultiple={false} />
          </>
        )}

        {/* Phone Number */}
        <Form.Item
          label="Phone Number"
          name="phoneNumber"
          rules={[
            { required: true, message: "Please enter your phone number" },
          ]}
        >
          <Input type="tel" placeholder="Enter your phone number" />
        </Form.Item>

        {/* Email */}
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

        {/* Password */}
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
          name="confirmedPassword"
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

        {/* Terms Agreement */}
        <Form.Item
          name="isTermsAgreed"
          valuePropName="checked"
          rules={[
            {
              required: true,
              message: "You must agree to the Terms and Conditions",
            },
          ]}
        >
          <Checkbox>
            I agree to the Cargowebs
            <Link
              className="text-primaryLight font-[300] ms-1"
              href="/terms-and-conditions"
              target="_blank"
            >
              Terms and Conditions
            </Link>
          </Checkbox>
        </Form.Item>
      </div>
    </>
  );
}
