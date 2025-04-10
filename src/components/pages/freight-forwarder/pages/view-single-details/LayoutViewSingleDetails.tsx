import React from "react";

export default function LayoutViewSingleDetails({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="p-6 pt-4 bg-[#FAFAFA] border rounded-lg flex flex-col gap-4">
      <h5 className="text-lg text-primary">{title}</h5>
      {children}
    </div>
  );
}
