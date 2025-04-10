import { TitleIcon } from "@/src/assets/images/freight-forwarder/title";
import React from "react";
import ViewUser from "@/src/components/pages/auth/user/ViewUser";

export default function page() {
  return (
    <div className="container py-10   ">
      <div className="flex items-center gap-2 mb-20">
        <TitleIcon />
        <h2 className="text-[32px] font-medium text-[#191919]">View User</h2>
      </div>
     <ViewUser/>
    </div>
  );
}
