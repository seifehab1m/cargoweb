import { getTranslations } from "next-intl/server";
import React from "react";

export default async function ContactCardDescription({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  const t = await getTranslations("contact_us");
  return (
    <div className="max-w-[275px]">
      <h3 className="py-2 text-lg font-medium text-[#191919]">{t(title)}</h3>
      <p className="text-sm text-darkGray pb-5">{t(description)}</p>
    </div>
  );
}
