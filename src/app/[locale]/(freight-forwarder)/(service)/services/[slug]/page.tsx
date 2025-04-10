"use client";
import SingleServiceFee from "@/src/components/pages/freight-forwarder/pages/services/slug/SingleServiceFee";
import SingleServiceInfo from "@/src/components/pages/freight-forwarder/pages/services/slug/SingleServiceInfo";
import SingleServiceTarrif from "@/src/components/pages/freight-forwarder/pages/services/slug/SingleServiceTarrif";
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
    getRequest(`/tazamun-freight-forwarder/api/v1/Services/${slug}`)
      .then((res) => {
        setService(res?.data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        message.error("An error occurred while fetching the service.");
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
        title="View Service"
        service={service}
        fetchpageDetails={fetchService}
      />
      <div className="flex flex-col gap-y-10">
        <SingleServiceInfo service={service} />
        <SingleServiceFee service={service} />
        <SingleServiceTarrif service={service} />
      </div>
    </div>
  );
}
