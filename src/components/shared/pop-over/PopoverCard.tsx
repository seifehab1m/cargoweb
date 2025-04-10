"use client";
import { Popover, PopoverProps } from "antd";

export default function PopoverCard({
  children,
  content,
  placement = "bottomRight",
  ...other
}: PopoverProps) {
  return (
    <Popover
      className="!cursor-pointer"
      content={content}
      placement={placement}
      trigger={"click"}
      {...other}
    >
      {children}
    </Popover>
  );
}
