import Image from "next/image";
import React from "react";
import story from "@/src/assets/images/story.png";
import { getTranslations } from "next-intl/server";


export default async function StoryOne() {
  const t= await getTranslations("");
  return (
    <section className="py-8 grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div>
        <h1 className="text-primary pt-5 pb-0">{t("cargowebs_story")}</h1>
        <p className="text-darkGray">
          Welcome to Cargoweb shipping platform, where we connect businesses
          with smarter shipping solutions. Whether youre managing small parcels,
          bulk freight, or specialized goods, our platform provides an
          intuitive, reliable, and efficient way to manage your shipping needs.
          We are dedicated to helping you streamline your logistics process with
          competitive rates, trusted freight forwarders, and innovative tracking
          systems—all at your fingertips.
        </p>
        <p className="text-darkGray pt-2">
          At Cargoweb, we understand the complexities of shipping, and were here
          to simplify the experience for you, enabling faster, safer, and more
          cost-effective deliveries. Our team is committed to providing you with
          the tools and resources you need to make your shipping process as
          seamless as possible.
        </p>
      </div>
      <div className="lg:ms-auto ms-0 ">
        <Image
          src={story}
          alt="Our story"
          className=" h-full object-contain"
          width={481}
          height={500}
        />
      </div>
    </section>
  );
}
