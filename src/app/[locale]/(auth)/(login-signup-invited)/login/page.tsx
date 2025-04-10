import Login from "@/src/components/pages/auth/login";
import HeadlineAuth from "@/src/components/pages/auth/shared/headlineAuth";
import React from "react";

export default function page() {
  return (
    <div className="container py-16 flex flex-col !w-full items-center">
      <HeadlineAuth
        title="Lets get you back in!"
        description="Enter your credentials to continue your journey with us"
      />
      <Login />
    </div>
  );
}
