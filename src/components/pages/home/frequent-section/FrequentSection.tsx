"use client";

import DotHeadline from "@/src/components/shared/dot-headline/DotHeadline";
import FrequentSWiper from "../frequent-section/FrequentSwiper";
import { useTranslations } from "next-intl";

export default function FrequentSection() {
  const t = useTranslations("home.frequent_section");

  return (
    <section className="container py-10 flex flex-col items-center gap-2 ">
      <DotHeadline
        headlinetext="frequent_qusestions"
        className="bg-primaryLight"
      />
      <h2 className="text-lg text-primary ">
        {t("sub_title")}
      </h2>
      <p className="max-w-[600px] text-center text-sm text-darkGray">
        {t("description")}
      </p>
      <FrequentSWiper />
    </section>
  );
}
