"use client";

import { useState } from "react";
import { Drawer, Button } from "antd";
import { MenuIcon } from "lucide-react";
import NavbarLinks from "./NavbarLinks";

export default function NavbarMobile() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden flex ">
      <Button className="md:hidden" onClick={() => setOpen(true)}>
        <MenuIcon size={20} />
      </Button>
      <Drawer
        title="Menu"
        placement="right"
        onClose={() => setOpen(false)}
        open={open}
      >
        <NavbarLinks className=" h-full w-fit hidden md:flex flex-col  md:items-start  gap-6  !font-medium " />
      </Drawer>
    </div>
  );
}
