import ForgetPassword from "@/src/components/pages/auth/forgetPassword";
import HeadlineAuth from "@/src/components/pages/auth/shared/headlineAuth";
import React from "react";

export default function page() {
  return (
    <div className="container py-16 flex flex-col !w-full items-center min-h-screen h-full">
      <HeadlineAuth
        title="Forgot Your Password?"
        description="No worries! Enter your email to receive a password reset link"
      />
      <ForgetPassword />
    </div>
  );
}
