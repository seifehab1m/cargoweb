import NewLocalCharge from "@/src/components/pages/freight-forwarder/pages/local-charge/NewLocalCharge";
import React from "react";

export default function page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  return <NewLocalCharge slug={slug} />;
}
