import NewCarrier from "@/src/components/pages/freight-forwarder/pages/carriers/NewCarrier";
import MainHeader from "@/src/components/shared/main-header/MainHeader";
import React from "react";

export default function page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  return (
    <div className="container py-10">
      <MainHeader title="Edit Carrier" />
      <NewCarrier slug={slug} />
    </div>
  );
}
