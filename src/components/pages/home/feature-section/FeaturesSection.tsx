import React from "react";
import DotHeadline from "../../../shared/dot-headline/DotHeadline";
import FeatureCard from "./FeatureCard";
import FeatureForm from "./FeatureForm";
import { useLocale, useTranslations } from "next-intl";
import bg from "@/src/assets/images/featureSection.png";
import bgAr from "@/src/assets/images/featureSectionAr.png";

export default function FeaturesSection() {
  const t = useTranslations("home.features-section");
  const locale = useLocale();

  return (
    <section
      style={{
        backgroundImage: `url(${locale === "en" ? bg.src : bgAr.src})`,
        width: "100%",
        height: "100%",
      }}
      className=" py-10  bg-center"
    >
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-20 ">
        <div className=" flex flex-col  gap-2">
          <DotHeadline headlinetext="features" className="bg-secondary" />
          <h2 className="text-lg text-greenishBlack ">
            {t("sub_title")}
          </h2>
          <p className="max-w-[600px] text-sm text-darkGray">
            {t("description")}
          </p>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-12 gap-y-8 mx-auto xl:mx-0 pt-6  ">
            <FeatureCard />
            <FeatureCard />
            <FeatureCard />
            <FeatureCard />
          </div>
        </div>
        <FeatureForm />
      </div>
    </section>
  );
}
