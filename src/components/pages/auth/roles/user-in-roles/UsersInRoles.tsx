import React from "react";
import HeaderCards from "../HeaderCards";
import UserRoleCard from "./UserRoleCard";

export default function UsersInRoles() {
  return (
    <div className="flex flex-col gap-3 border rounded-lg p-6 bg-[#FAFAFA] mt-6 ">
      <HeaderCards title="Users In This Role" number="4" />
      <div className="flex gap-6 ">
        <UserRoleCard />
        <UserRoleCard />
        <UserRoleCard />
        <UserRoleCard />
      </div>
    </div>
  );
}
