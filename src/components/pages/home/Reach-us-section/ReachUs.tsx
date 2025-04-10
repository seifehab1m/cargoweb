import DotHeadline from "@/src/components/shared/dot-headline/DotHeadline";
import ReachUsForm from "./ReachUsForm";
import ReachUsCard from "../../../shared/cards/ReachUsCard";
import { Mail, Phone } from "lucide-react";
import { useTranslations } from "next-intl";

export default function ReachUs() {
    const t = useTranslations("home.Reach_to_us_section");
  
  return (
    <section className="container p-16 bg-secondaryLight rounded-3xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <DotHeadline
            headlinetext="Reach to us"
            className="bg-secondary h-fit"
          />
          <h2 className="text-lg text-greenishBlack font-medium pt-3 pb-5">
            {t("sub_title")}
          </h2>
          <div className="flex flex-wrap gap-6 xl:gap-12">
            <ReachUsCard
              title="email_support"
              description="support@cargoweb.com"
            >
              <Mail color="white" size={35} />
            </ReachUsCard>
            <ReachUsCard
              title="call_us_directly"
              description="+000 000000000"
            >
              <Phone color="white" size={35} />
            </ReachUsCard>
          </div>
        </div>
        <ReachUsForm />
      </div>
    </section>
  );
}
