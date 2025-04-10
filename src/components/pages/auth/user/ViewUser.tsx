"use client";
import img from "@/src/assets/images/person.jpg";
import Image from "next/image";
import { Button, message } from "antd";
import { Ban, CircleCheckBig, SquarePen } from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { getRequest, putRequest } from "@/src/network/api";
import { CarrierType } from "../../freight-forwarder/pages/carriers/TypesCarrier";
import Loading from "@/src/components/shared/loading/Loading";

export default function ViewUser({ slug }: { slug?: string }) {
  const [carrierLoading, setCarrierLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [carrier, setCarrier] = useState<CarrierType | null>(null);

  const fetchpageDetails = useCallback(() => {
    setCarrierLoading(true);
    getRequest(`/tazamun-freight-forwarder/api/v1/Carriers/${slug}`)
      .then((res) => {
        setCarrierLoading(false);
        setCarrier(res?.data);
      })
      .catch((err) => console.log(err));
  }, [slug]);

  useEffect(() => {
    fetchpageDetails();
  }, [fetchpageDetails]);

  const handleDeactivateOrActivate = (url: string) => {
    setLoading(true);
    putRequest(`${url}${slug}`)
      .then(() => {
        message.success("Status updated successfully.");
        fetchpageDetails();
      })
      .catch(() => {
        message.error(" ID is not valid");
        setLoading(false);
      })
      .finally(() => setLoading(false));
  };
  if (carrierLoading) return <Loading />;

  return (
    <div className="bg-[#FAFAFA] rounded-3xl p-6 shadow-md ">
      <div className="flex justify-between">
        <div className="flex gap-4">
          <Image
            src={img}
            alt="user-profile"
            width={105}
            height={105}
            className="object-cover h-[105px] rounded"
          />
          <div className="card-body flex flex-col justify-center gap-2 ">
            <h2 className="text-2xl font-medium">{carrier?.primaryName}</h2>
            <h6 className="text-base text-darkGray font-[400]">
              {carrier?.code}
            </h6>
          </div>
        </div>
        <div className="flex gap-4">
          <Link href={``}>
            <Button type="primary" htmlType="submit">
              <SquarePen size={15} />
              Edit
            </Button>
          </Link>

          {carrier?.status === 1 || carrier?.status === 0 ? (
            <Button
              className="!bg-danger text-white"
              type="primary"
              htmlType="submit"
              loading={loading}
              onClick={() =>
                handleDeactivateOrActivate(
                  "/tazamun-freight-forwarder/api/v1/Carriers/InActive/"
                )
              }
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
              onClick={() =>
                handleDeactivateOrActivate(
                  "/tazamun-freight-forwarder/api/v1/Carriers/active/"
                )
              }
            >
              <CircleCheckBig size={15} className="text-titleColor" />
              Activate
            </Button>
          )}
        </div>
      </div>
      <div className="line" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
        <div className="flex flex-col gap-2">
          <h5 className="text-darkGray font-[400] text-sm">Created on</h5>
          <h6 className="text-base text-[#191919] font-[400] ">
            Nov 30, 2024{" "}
          </h6>
        </div>
        <div className="flex flex-col gap-2">
          <h5 className="text-darkGray font-[400] text-sm">Office</h5>
          <h6 className="text-base text-[#191919] font-[400] ">Tazamun </h6>
        </div>
        <div className="flex flex-col gap-2">
          <h5 className="text-darkGray font-[400] text-sm">Email</h5>
          <h6 className="text-base text-[#191919] font-[400] ">seifehab@gmail.com </h6>
        </div>
        <div className="flex flex-col gap-2">
          <h5 className="text-darkGray font-[400] text-sm">Phone</h5>
          <h6 className="text-base text-[#191919] font-[400] ">+02 01111763977 </h6>
        </div>
        <div className="flex flex-col gap-2">
          <h5 className="text-darkGray font-[400] text-sm">Status</h5>
          <h6 className="text-base text-[#191919] font-[400] ">{carrier?.status===1?"Active":"In Active"} </h6>
        </div>
      </div>
    </div>
  );
}
