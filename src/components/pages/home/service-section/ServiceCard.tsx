import Image from "next/image";
import React from "react";
import img from "@/src/assets/images/heroSection.png";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLocale } from "next-intl";

export default function ServiceCard() {
  const locale = useLocale();
  return (
    <div className="rounded-3xl bg-black relative">
      <Image src={img} alt="hero section" width={380} height={240} />
      <div className="cursor-pointer w-fit absolute left-4 bottom-4 py-1 pe-[10px] ps-1 rounded-lg bg-white flex items-center gap-1 ">
        <div className="rounded-[4px] bg-primaryLightAlt px-3 py-[2px]">
          <p className="text-sm  text-white">Air Freight</p>
        </div>
        <p className="text-sm text-darkGray me-1">Explore</p>
        {locale === "en" ? (
          <ChevronRight size={15} className="text-darkGray" />
        ) : (
          <ChevronLeft size={15} className="text-darkGray" />
        )}
      </div>
    </div>
  );
}
