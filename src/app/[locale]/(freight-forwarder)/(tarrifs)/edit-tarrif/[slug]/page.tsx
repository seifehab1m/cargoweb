import NewTarrif from "@/src/components/pages/freight-forwarder/pages/tarrif/NewTarrif";
import React from "react";

export default function page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  return <NewTarrif slug={slug} />;
}
