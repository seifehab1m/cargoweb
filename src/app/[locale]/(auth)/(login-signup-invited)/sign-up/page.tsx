import HeadlineAuth from "@/src/components/pages/auth/shared/headlineAuth";
import Signup from "@/src/components/pages/auth/signup";
import React from "react";

export default function page() {
  return (
    <div className="container py-16 flex flex-col !w-full items-center">
      <HeadlineAuth
        title="Get Started with Freight Forwarding"
        description="Join our platform to connect with shippers and grow your business effortlessly"
      />
      <Signup />
    </div>
  );
}
