"use client";
import React from "react";
import { Button, Menu } from "antd";
import {  Plus } from "lucide-react";
import PopoverCard from "@/src/components/shared/pop-over/PopoverCard";
import { Link } from "@/src/i18n/routing";

const itemsMenu = [
  {
    title: "Create new Carrier",
    icon: <Plus color="#191919" size={15} />,
    href: "/new-carrier",
  },
//   {
//     title: "Upload rates",
//     icon: <CloudUpload size={15} />,
//     href: "/upload-rates",
//   },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const handle = (e: any) => {
  console.log(e);
};

export default function NewCarriersBtn() {
  return (
    <div className="custom">
      <PopoverCard
        content={
          <Menu>
            {itemsMenu.map((item, index) => (
              <Link href={item?.href} key={index}>
                <Menu.Item
                  onClick={() => handle(item?.title)}
                  icon={item?.icon}
                >
                  {item?.title}
                </Menu.Item>
              </Link>
            ))}
          </Menu>
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
