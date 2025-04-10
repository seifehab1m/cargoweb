import NewGeneralCharge from "@/src/components/pages/freight-forwarder/pages/general-charge/NewGeneralCharge";
import React from "react";

export default function page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  return <NewGeneralCharge slug={slug} />;
}
