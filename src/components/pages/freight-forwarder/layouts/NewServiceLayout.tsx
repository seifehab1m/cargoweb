import React from "react";

export default function NewServiceLayout({
  children,
  title = " Service Info",
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <div className=" border rounded-[8px] overflow-hidden">
      <div className="p-3 bg-primaryBg ">
        <h5 className="text-base text-primary">{title}</h5>
      </div>
      <div className="p-4 pb-3">{children}</div>
    </div>
  );
}
