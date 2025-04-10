import story3 from "@/src/assets/images/story3.png";
import story3Ar from "@/src/assets/images/story3Ar.png";
import DotHeadline from "../../shared/dot-headline/DotHeadline";
import CheckWithText from "../../shared/check-with-text/CheckWithText";
import Image from "next/image";
import { useLocale } from "next-intl";

export default function StoryThree() {
  const locale = useLocale();

  return (
    <section className="py-20 grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div>
        <div>
          <DotHeadline
            headlinetext="what_we_seek"
            className="bg-primaryLight"
          />
          <p className="text-darkGray py-2">
            Is to revolutionize the shipping industry by making it smarter, more
            efficient, and more accessible for businesses worldwide. We aim to
            build a global network of trusted freight partners and empower
            businesses with the tools they need to manage their logistics with
            ease and confidence.
          </p>
          <p className="text-darkGray py-2">
            We envision a future where businesses of all sizes can seamlessly
            access the most efficient shipping solutions, no matter where they
            are located. Through continuous innovation and commitment to
            excellence, we aspire to set a new standard for the logistics
            industry—one where businesses can rely on us for smarter shipping,
            every time.
          </p>
          <p className="text-darkGray pt-2">By 2030, we plan to:</p>
          <div className="flex flex-col gap-2 pt-2">
            <CheckWithText text="Connecting businesses with trusted freight partners" />
            <CheckWithText text="Connecting businesses with trusted freight partners" />
            <CheckWithText text="Connecting businesses with trusted freight partners" />
          </div>
        </div>
      </div>
      <div className="lg:ms-auto ms-0 ">
        {locale === "en" ? (
          <Image
            src={story3}
            alt="Our story"
            className=" h-full object-cover"
            width={481}
            height={500}
          />
        ) : (
          <Image
            src={story3Ar}
            alt="Our story"
            className=" h-full object-cover"
            width={481}
            height={500}
          />
        )}
      </div>
    </section>
  );
}
