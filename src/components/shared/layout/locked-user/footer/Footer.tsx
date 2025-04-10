import { Link } from "@/src/i18n/routing";
import React from "react";
import { Facebook, Youtube, Send, PhoneCall, Twitter } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { WhiteLogoAr } from "@/src/assets/images/svgs/whitelogoAr";
import { WhiteLogo } from "@/src/assets/images/svgs/whiteLogo";

export default function Footer() {
  const locale = useLocale();
  const t = useTranslations("navbarAndFooter");

  return (
    <footer className="text-white container p-9 rounded-tr-3xl rounded-tl-3xl bg-footer bg-cover mt-7 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pb-8">
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-medium">{t("aboutUs")}</h3>
          <Link className="text-sm" href={"/our-story"}>
            {t("ourStory")}
          </Link>
          <Link className="text-sm" href={"/privacy-policy"}>
            {t("privacyPolicy")}
          </Link>
          <Link className="text-sm" href={"/terms-and-conditions"}>
            {t("termsAndConditions")}
          </Link>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-medium">{t("quickLinks")}</h3>
          <Link className="text-sm" href={"/services"}>
            {t("services")}
          </Link>
          <Link className="text-sm" href={"/features"}>
            {t("features")}
          </Link>
          <Link className="text-sm" href={"/faqs"}>
            {t("faq")}
          </Link>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-medium">{t("actions")}</h3>
          <Link className="text-sm" href={"/search-rates"}>
            {t("searchForRates")}
          </Link>
          <Link className="text-sm" href={"/start-as-forwarder"}>
            {t("startAsForwarder")}
          </Link>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-medium">{t("helpAndSupport")}</h3>
          <Link className="text-sm" href={"/help-center"}>
            {t("helpCenter")}
          </Link>
          <Link className="text-sm" href={"/contact"}>
            {t("contactUs")}
          </Link>
        </div>
      </div>
      {locale === "ar" ? <WhiteLogoAr /> : <WhiteLogo />}
      <div className="pt-5 flex flex-col sm:flex-row items-start sm:items-end gap-2 sm:gap-2">
        <h3 className="text-sm text-nowrap">{t("rights")}</h3>
        <div className="w-full h-[2px] bg-white" />
        <div className="flex gap-2 text-white">
          <Facebook />
          <Youtube />
          <Send />
          <PhoneCall />
          <Twitter />
        </div>
      </div>
    </footer>
  );
}
