import React from "react";
import Image from "next/image";
import img from "@/src/assets/images/heroSection.png";

export default function UserRoleCard() {
  return (
    <div className="w-fit flex gap-3 px-4 py-3 card bg-white rounded-lg shadow-md ">
      <Image
        src={img}
        alt="user-profile"
        width={80}
        height={80}
        className="object-cover h-[80px] rounded"
      />
      <div className="card-body flex flex-col gap-2 ">
        <h2 className="text-lg font-medium">User Name</h2>
        <h6 className="text-xs text-darkGray font-[300]">Office</h6>
        <h5 className="text-[#3F60C9] font-[400] text-sm">Visit profile</h5>
      </div>
    </div>
  );
}
