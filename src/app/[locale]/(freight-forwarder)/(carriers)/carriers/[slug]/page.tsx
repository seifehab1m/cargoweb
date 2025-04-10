import ViewUser from "@/src/components/pages/auth/user/ViewUser";
import MainHeader from "@/src/components/shared/main-header/MainHeader";
import React from "react";

export default function page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  return (
    <div className="container py-10 mb-24">
      <MainHeader title="View Carrier" />
      <ViewUser slug={slug} />
    </div>
  );
}
