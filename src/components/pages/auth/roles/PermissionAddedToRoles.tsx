import React from "react";
import HeaderCards from "./HeaderCards";
import CheckedTitle from "./CheckedTitle";

export default function PermissionAddedToRoles() {
  return (
    <div className="flex flex-col gap-3 border rounded-lg p-6 bg-[#FAFAFA] mt-6 ">
      <HeaderCards title="Permissions Added To This Role" number="1" />
      <div className="flex gap-4 ">
        <CheckedTitle text="Roles" />
        <CheckedTitle text="Roles" />
        <CheckedTitle text="Roles" />
      </div>
    </div>
  );
}
