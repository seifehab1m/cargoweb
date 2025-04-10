import { useTranslations } from "next-intl";
import React from "react";

export default  function FrequentSwiperCard() {
  const t= useTranslations("");
  return (
    <div className="p-4 bg-white rounded-xl border">
      <div className="w-fit rounded-[4px] bg-primaryLightAlt px-3 py-[2px]">
        <h5 className="text-sm text-white">Rates and costs</h5>
      </div>
      <p className="py-2 font-regular text-[#191919]">
        How much will shipping cost?
      </p>
      <p className="text-sm text-darkGray">
        Shipping costs can vary depending on several factors, including package
        weight, dimensions, destination, shipping carrier, and service level. To
        get an accurate shipping rate, you ll typically need to provide the
        necessary deta... <span className="cursor-pointer text-primaryLight">{t('read_more')}</span>
      </p>
    </div>
  );
}
