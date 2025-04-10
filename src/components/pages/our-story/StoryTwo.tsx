import story2 from "@/src/assets/images/story2.png";
import story2Ar from "@/src/assets/images/story2Ar.png";
import { useLocale } from "next-intl";
import Image from "next/image";
import DotHeadline from "../../shared/dot-headline/DotHeadline";
import CheckWithText from "../../shared/check-with-text/CheckWithText";

export default function StoryTwo() {
  const locale = useLocale();
  
  return (
    <section className="pt-20 grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div className="lg:me-auto me-0 ">
        {locale === "en" ? (
          <Image
            src={story2}
            alt="Our story"
            className=" h-full object-contain"
            width={481}
            height={500}
          />
        ) : (
          <Image
            src={story2Ar}
            alt="Our story"
            className=" h-full object-contain"
            width={481}
            height={500}
          />
        )}
      </div>
      <div>
        <DotHeadline headlinetext="what_we_aim" className="bg-primaryLight" />
        <p className="text-darkGray py-2">
          Is to provide businesses with the best shipping solutions that offer
          reliability, efficiency, and value. We re here to ensure that every
          package, whether big or small, reaches its destination safely and on
          time and aim to support businesses in scaling their operations by
          efficient shipping solutions that minimize the stress of logistics and
          help you focus on growing their business.
        </p>
        <p className="text-darkGray pt-2">We achieve this by:</p>
        <div className="flex flex-col gap-2 pt-2">
          <CheckWithText text="Connecting businesses with trusted freight partners" />
          <CheckWithText text="Connecting businesses with trusted freight partners" />
          <CheckWithText text="Connecting businesses with trusted freight partners" />
        </div>
      </div>
    </section>
  );
}
