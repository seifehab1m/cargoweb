import { TitleIcon } from "@/src/assets/images/freight-forwarder/title";
import FormEditRole from "@/src/components/pages/auth/roles/edit-role-form/FormEditRole";
import React from "react";

export default function page() {
  return (
    <div className="py-10 container">
      <div className="flex items-center gap-2 ">
        <TitleIcon />
        <h2 className="text-[32px] font-medium text-[#191919]">Edit Role</h2>
      </div>
      <FormEditRole />
    </div>
  );
}
