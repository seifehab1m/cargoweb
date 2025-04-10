import React from "react";

export default function HeaderCards({
  title,
  number,
}: {
  title: string;
  number: string;
}) {
  return (
    <div className="flex items-center gap-2">
      <h2 className="text-lg text-primary">{title}</h2>
      <div className="bg-[#3F60C9]  text-sm text-white px-[7px] py-[1px] rounded-md">{number}</div>
    </div>
  );
}
