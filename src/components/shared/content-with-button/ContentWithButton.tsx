import React from "react";
import DotHeadline from "../dot-headline/DotHeadline";

export default function ContentWithButton({
  title,
  description,
  headlinetext,
}: {
  title: string;
  description: string;
  headlinetext: string;
}) {
  return (
    <div>
      <DotHeadline className=" bg-primaryLight" headlinetext={headlinetext} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
