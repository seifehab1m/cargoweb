import { Logo } from "@/src/assets/images/svgs/logo";
import React from "react";

export default function HeadlineAuth({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col !w-full items-center ">
      <Logo />
      <h2 className="pt-8 pb-2 text-titleColor text-2xl font-medium">
        {title}
      </h2>
      <p className="text-darkGray font-regular">{description}</p>
    </div>
  );
}
