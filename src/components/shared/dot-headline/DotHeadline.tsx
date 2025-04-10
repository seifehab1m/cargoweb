import { DotIcon } from "@/src/assets/images/svgs/Dot";
import { useTranslations } from "next-intl";
import React from "react";

export default function DotHeadline({
  headlinetext,
  className,
}: {
  headlinetext: string;
  className?: string;
}) {
  const t = useTranslations("");

  return (
    <div
      className={`flex items-center gap-2 w-fit text-white px-[10px] py-1 rounded-md  text-sm ${className}`}
    >
      <DotIcon />
      <h2>{t(headlinetext)}</h2>
    </div>
  );
}
