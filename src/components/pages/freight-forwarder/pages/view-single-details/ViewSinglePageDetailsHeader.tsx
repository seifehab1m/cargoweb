"use client";
import { Link } from "@/src/i18n/routing";
import Export from "../../btns/Export";
import { TitleIcon } from "@/src/assets/images/freight-forwarder/title";
import { Button, message } from "antd";
import { Ban, CircleCheckBig, SquarePen } from "lucide-react";
import { useParams } from "next/navigation";
import { useState } from "react";
import { putRequest } from "@/src/network/api";

export default function ViewSinglePageDetailsHeader({
  title,
  service,
  editUrl = "/edit-service",
  urlActivate = "/tazamun-freight-forwarder/api/v1/Services/active/",
  urlDeactivate = "/tazamun-freight-forwarder/api/v1/Services/InActive/",
  fetchpageDetails,
}: {
  title?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  service?: any;
  urlActivate?: string;
  urlDeactivate?: string;
  editUrl?: string;

  fetchpageDetails?: () => void;
}) {
  const params = useParams<{ slug: string }>();
  const [loading, setLoading] = useState(false);

  const handleDeactivateOrActivate = (url: string) => {
    setLoading(true);
    putRequest(`${url}${params?.slug}`)
      .then(() => {
        message.success("Status updated successfully.");
        if (fetchpageDetails) fetchpageDetails();
      })
      .catch(() => {
        message.error(" ID is not valid");
        setLoading(false);
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="flex items-center justify-between gap-2 pb-11">
      <div className="flex items-center gap-2 ">
        <TitleIcon />
        <h2 className="text-[32px] font-medium text-[#191919]">{title}</h2>
      </div>
      <div className="flex gap-4">
        <Link href={`${editUrl}/${params?.slug}`}>
          <Button type="primary" htmlType="submit">
            <SquarePen size={15} />
            Edit
          </Button>
        </Link>
        {service?.status === 1 || service?.status === 0 ? (
          <Button
            className="!bg-danger text-white"
            type="primary"
            htmlType="submit"
            loading={loading}
            onClick={() => handleDeactivateOrActivate(urlDeactivate)}
          >
            <Ban size={15} />
            Deactivate
          </Button>
        ) : (
          <Button
            className="!bg-secondary !text-titleColor"
            type="primary"
            htmlType="submit"
            loading={loading}
            onClick={() => handleDeactivateOrActivate(urlActivate)}
          >
            <CircleCheckBig size={15} className="text-titleColor" />
            Activate
          </Button>
        )}
        <Export />
      </div>
    </div>
  );
}
