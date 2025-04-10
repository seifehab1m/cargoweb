"use client";
import React from "react";
import { Button, Menu } from "antd";
import { Download } from "lucide-react";
import PopoverCard from "@/src/components/shared/pop-over/PopoverCard";

const itemsMenu = [
  {
    title: "Export to excel",
  },
  { title: "Export to CSV" },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const handle = (e: any) => {
  console.log(e);
};

export default function Export() {
  return (
    <div className="custom">
      <PopoverCard
        placement="bottomLeft"
        content={
          <Menu>
            {itemsMenu.map((item, index) => (
              <Menu.Item onClick={() => handle(item?.title)} key={index}>
                {item?.title}
              </Menu.Item>
            ))}
          </Menu>
        }
      >
        <Button type="primary" className=" !shadow-none w-[100px] !bg-[#FAFAFA] !text-darkGray  !border-[#D5D7DA]">
          <Download size={15} />
          Export
        </Button>
      </PopoverCard>
    </div>
  );
}
