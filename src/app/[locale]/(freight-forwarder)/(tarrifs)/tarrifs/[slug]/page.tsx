"use client";

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
    getRequest(`/tazamun-freight-forwarder/api/v1/Tariff/${slug}`)
      .then((res) => {
        setService(res?.data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        message.error("An error occurred while fetching the tarrif.");
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
        title="View Tarrif"
        service={service}
        fetchpageDetails={fetchService}
      />
    </div>
  );
}
