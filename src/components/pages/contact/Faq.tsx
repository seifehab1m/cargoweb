import React from "react";
import type { CollapseProps } from "antd";
import { Collapse } from "antd";
import DotHeadline from "../../shared/dot-headline/DotHeadline";
import { useTranslations } from "next-intl";

const text = `
 Freight shipping is used for large, heavy shipments transported via truck,
  rail, air, or sea, while parcel shipping is for smaller packages handled by couriers.
`;

const items: CollapseProps["items"] = [
  {
    key: "1",
    label:
      "What is the difference between freight shipping and parcel shipping?",
    children: <p>{text}</p>,
  },
  {
    key: "2",
    label:
      "What is the difference between freight shipping and parcel shipping?",
    children: <p>{text}</p>,
  },

  {
    key: "3",
    label:
      "What is the difference between freight shipping and parcel shipping?",
    children: <p>{text}</p>,
  },
];

export default function Faq() {
  const t = useTranslations("");
  return (
    <div className="container py-16 grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-16 ">
      <div className="lg:col-span-1 col-span-5">
        <DotHeadline
          headlinetext="explore_the_faqs"
          className="bg-secondary h-fit"
        />
        <h2 className="text-2xl pt-2 font-medium leading-[44.8px]">
          {t("explore_the_faqs_desc")}
        </h2>
      </div>
      <div className="lg:col-span-3 col-span-5">
        <Collapse items={items} defaultActiveKey={["1"]} bordered={false} />
      </div>
    </div>
  );
}
