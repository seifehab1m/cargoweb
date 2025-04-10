import NewService from "@/src/components/pages/freight-forwarder/pages/services/NewService";
import React from "react";

export default function page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  return <NewService slug={slug} />;
}
