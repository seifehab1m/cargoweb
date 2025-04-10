import { Button } from "antd";
import { useTranslations } from "next-intl";
import React from "react";

export default function HeroSection() {
  const t = useTranslations("home");
  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-hero bg-cover bg-center">
      <div className="backdrop-blur-[8px] bg-[#3F60C9]/10 border border-gray-400  w-full md:w-fit  max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] xl:max-w-[50%] rounded-3xl flex flex-col items-center text-center py-16 px-6 sm:py-16 sm:px-10 lg:py-16 lg:px-12">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white">
          {t("hero_title")}
        </h1>
        <p className="text-white text-sm md:text-base pt-4 pb-6 sm:pb-8">
          {t("hero_description")}
        </p>
        <Button className="!text-base">{t("start_shipping_now")}</Button>
      </div>
    </section>
  );
}
