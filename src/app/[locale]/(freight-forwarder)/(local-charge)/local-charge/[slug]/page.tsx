"use client";
import ChargeInfoGeneralCharge from "@/src/components/pages/freight-forwarder/pages/general-charge/slug/ChargeInfoGeneralCharge";
import FeeGeneralCharge from "@/src/components/pages/freight-forwarder/pages/general-charge/slug/FeeGeneralCharge";
import ViewSinglePageDetailsHeader from "@/src/components/pages/freight-forwarder/pages/view-single-details/ViewSinglePageDetailsHeader";
import { getRequest } from "@/src/network/api";
import { message, Spin } from "antd";
import React, { useEffect, useState, useCallback } from "react";

export default function Page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchService = useCallback(() => {
    setLoading(true);
    getRequest(`/tazamun-freight-forwarder/api/v1/LocalCharges/${slug}`)
      .then((res) => {
        setService(res?.data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        message.error("An error occurred while fetching.");
      });
  }, [slug]);

  useEffect(() => {
    fetchService();
  }, [fetchService]);

  if (loading)
    return (
      <div className="container py-10 flex justify-center items-center h-screen">
        <Spin size="large" />
      </div>
    );

  return (
    <div className="container py-10">
      <ViewSinglePageDetailsHeader
        editUrl="/edit-general-charge"
        title="View Local Charge"
        service={service}
        fetchpageDetails={fetchService}
        urlActivate="/tazamun-freight-forwarder/api/v1/LocalCharges/active/"
        urlDeactivate="/tazamun-freight-forwarder/api/v1/LocalCharges/InActive/"
      />
      <div className="flex flex-col gap-y-10">
        <ChargeInfoGeneralCharge generalCharge={service} />
        <FeeGeneralCharge generalCharge={service} />
      </div>
    </div>
  );
}
