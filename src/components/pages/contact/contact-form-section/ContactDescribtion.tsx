import Breadcrumb from "@/src/components/shared/breadcrumb/Breadcrumb";
import ReachUsCard from "@/src/components/shared/cards/ReachUsCard";
import { Mail, Phone } from "lucide-react";
import React from "react";
import ContactCardDescription from "./ContactCardDescription";
import { getTranslations } from "next-intl/server";

export default async function ContactDescribtion() {
  const t = await getTranslations("contact_us");
  return (
    <div>
      <Breadcrumb
        links={[
          { linkName: "home", href: "/home" },
          { linkName: "contact_us", href: "/contact" },
        ]}
      />
      <h1 className="text-primary pt-5 pb-0">{t("contact_us")}</h1>
      <p className="text-darkGray pb-10">{t("description")} </p>

      <div className="flex flex-wrap gap-6 xl:gap-12">
        <ReachUsCard
          title="email_support"
          description="support@cargoweb.com"
          bgColor="bg-primary"
        >
          <Mail color="white" size={35} />
        </ReachUsCard>
        <ReachUsCard
          title="call_us_directly"
          description="+000 000000000"
          bgColor="bg-primary"
        >
          <Phone color="white" size={35} />
        </ReachUsCard>
      </div>
      <div className="flex flex-wrap gap-3  pt-8">
        <ContactCardDescription
          title="customer_support"
          description="customer_support_desc"
        />
        <ContactCardDescription title="feedback" description="feedback_desc" />
      </div>
    </div>
  );
}
