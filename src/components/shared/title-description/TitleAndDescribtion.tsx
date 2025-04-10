import React from "react";

export default function TitleAndDescribtion({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div>
      <h6 className="text-sm text-darkGray pb-2">{title}</h6>
      <h5 className="text-titleColor text-base">{description}</h5>
    </div>
  );
}
