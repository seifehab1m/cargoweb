import HeadlineAuth from "@/src/components/pages/auth/shared/headlineAuth";
import VerificationCode from "@/src/components/pages/auth/verificationCode";
import React from "react";

export default function page() {
  return (
    <div className="container py-16 flex flex-col !w-full items-center min-h-screen h-full">
      <HeadlineAuth
        title="Enter Verification Code"
        description="Weve sent an OTP code to [registered email]. Enter it below to continue."
      />
      <VerificationCode />
    </div>
  );
}
