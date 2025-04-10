import SetupNewPassword from "@/src/components/pages/auth/SetupNewPassword";
import HeadlineAuth from "@/src/components/pages/auth/shared/headlineAuth";
import React from "react";

export default function page() {
  return (
    <div className="container py-16 flex flex-col !w-full items-center min-h-screen h-full">
      <HeadlineAuth
        title="Set Your New Password"
        description="Enter your new password below and confirm it to continue"
      />
      <SetupNewPassword />
    </div>
  );
}
