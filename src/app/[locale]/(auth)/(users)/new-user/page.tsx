import { TitleIcon } from "@/src/assets/images/freight-forwarder/title";
import UserForm from "@/src/components/pages/auth/user/UserForm";
import React from "react";

export default function NewUser() {
  return (
    <div className="py-10 container">
      <div className="flex items-center gap-2 pb-11">
        <TitleIcon />
        <h2 className="text-[32px] font-medium text-[#191919]">Add User </h2>
      </div>
      <UserForm />
    </div>
  );
}
