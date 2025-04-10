import { useTranslations } from "next-intl";
import React from "react";

export default function ReachUsCard({
  title,
  description,
  children,
  bgColor = "bg-secondary",
}: {
  title: string;
  description: string;
  children: React.ReactNode;
  bgColor?: string;
}) {
  const t = useTranslations("home.Reach_to_us_section");

  return (
    <div className="flex gap-2">
      <div className={`p-2 ${bgColor} rounded-[10px] w-fit`}>{children}</div>
      <div className="flex flex-col justify-between text-darkGray text-sm">
        <h5>{t(title)}</h5>
        <h5>{description}</h5>
      </div>
    </div>
  );
}
