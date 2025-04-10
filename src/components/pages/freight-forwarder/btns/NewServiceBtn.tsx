"use client";
import React from "react";
import { Button, Menu } from "antd";
import { CloudUpload, Plus } from "lucide-react";
import PopoverCard from "@/src/components/shared/pop-over/PopoverCard";
import { useRouter } from "next/navigation";

const itemsMenu = [
  {
    key: "create-service",
    label: "Create new service",
    icon: <Plus color="#191919" size={15} />,
    href: "/new-service?unitOfMeasure=perflat&mode=1",
  },
  {
    key: "upload-rates",
    label: "Upload rates",
    icon: <CloudUpload size={15} />,
    href: "/services/upload-rates",
  },
];

export default function NewServiceBtn() {
  const router = useRouter();

  const handleMenuClick = ({ key }: { key: string }) => {
    const selected = itemsMenu.find((item) => item.key === key);
    if (selected?.href) {
      router.push(selected.href);
    }
  };

  return (
    <div className="custom">
      <PopoverCard
        content={
          <Menu
            onClick={handleMenuClick}
            items={itemsMenu.map((item) => ({
              key: item.key,
              label: item.label,
              icon: item.icon,
            }))}
          />
        }
      >
        <Button className="!shadow-none !ps-4" type="primary">
          <Plus className="font-medium" size={15} />
          New
        </Button>
      </PopoverCard>
    </div>
  );
}
