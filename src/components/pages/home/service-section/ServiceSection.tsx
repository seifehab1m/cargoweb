import React from "react";
import DotHeadline from "../../../shared/dot-headline/DotHeadline";
import ServiceCard from "./ServiceCard";
import { useTranslations } from "next-intl";

export default function ServiceSection() {
  const t = useTranslations("home.services-section");
  return (
    <section className="container py-10 flex flex-col items-center gap-2">
      <DotHeadline headlinetext="services" className="bg-primaryLight" />
      <h2 className="text-lg text-primary font-medium">{t("sub_title")}</h2>
      <p className="max-w-[600px] text-center text-sm text-darkGray">
        {t("description")}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
    </section>
  );
}
