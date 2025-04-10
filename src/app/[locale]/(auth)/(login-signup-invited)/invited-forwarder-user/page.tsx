import InvitedFreightForwarder from "@/src/components/pages/auth/InvitedFreightForwarder";
import HeadlineAuth from "@/src/components/pages/auth/shared/headlineAuth";
import React from "react";

export default function page() {
  return (
    <div className="container py-16 flex flex-col !w-full items-center">
      <HeadlineAuth
        title="Finish Setting Up Your Account"
        description="Join our platform to connect with shippers and grow your business effortlessly"
      />
      <InvitedFreightForwarder />
    </div>
  );
}
