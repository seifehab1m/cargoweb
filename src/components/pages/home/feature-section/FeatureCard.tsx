import { House } from "lucide-react";
import { useLocale } from "next-intl";
import React from "react";

export default function FeatureCard() {
  const locale = useLocale();

  return (
    <div className="w-64 overflow-visible ">
      <div className="flex w-full ">
        <div className="mb-1 me-1 p-[6px] bg-secondary z-20 rounded-md flex items-center justify-center">
          <House className="text-white" />
        </div>
        <div className="bg-white w-full rounded-tl-xl rounded-tr-xl p-2 z-10 shadow-gray-sm relative">
          <p className="text-[#191919] !text-base">
            Trusted Freight Forwarders
          </p>
          <div className="absolute left-0 bottom-[-4px] w-full h-[8px] bg-white"></div>
        </div>
      </div>
      <div
        className={`card bg-white ${
          locale === "en" ? "rounded-tl-xl" : "rounded-tr-xl"
        } text-sm text-darkGray rounded-bl-xl rounded-br-xl rounded-tr-none relative shadow-gray-sm`}
      >
        <p className="py-3 px-4">
          Connect with a network of reliable freight forwarders and choose the
          best option for your needs.
        </p>
      </div>
    </div>
  );
}
