"use client";
import { useRouter } from "@/src/i18n/routing";
import { Button, Form, message } from "antd";
import React, { useState, useRef } from "react";

export default function VerificationCode() {
  const router = useRouter();
  const [otp, setOtp] = useState(["1", "5", "7", "4", "5", "2"]);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return; // Allow only numbers

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move focus to the next input
    if (value && index < otp.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = () => {
    message.success("Account successfully verified");
    router.push("/login");
  };

  return (
    <Form
      name="signup_form"
      layout="vertical"
      autoComplete="off"
      className="w-full"
      style={{ maxWidth: "550px" }}
    >
      <div className="flex flex-wrap gap-3 py-8">
        {otp.map((value, index) => (
          <input
            key={index}
            ref={(el) => {
              inputRefs.current[index] = el; // ✅ Fix: No return value
            }}
            type="text"
            maxLength={1}
            value={value}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            className="w-[80px] h-[80px] border border-[#D5D7DA] rounded-2xl text-center text-[40px] focus:outline-none focus:ring-0 focus:shadow-[0px_0px_0px_4px_rgba(63,96,201,0.5)]"
          />
        ))}
      </div>
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="!w-full"
          block
          onClick={handleSubmit}
        >
          submit
        </Button>
      </Form.Item>
      <div className="flex justify-center w-full gap-1 pt-8 ">
        <h6>Didnt receive the code? </h6>
        <span className="text-primaryLight">Resend in 2:00</span>
      </div>
    </Form>
  );
}
