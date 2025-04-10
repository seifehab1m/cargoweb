import style from "./navbar.module.scss";
import { Link, usePathname } from "@/src/i18n/routing";
import { Button, Dropdown, Menu } from "antd";
import { useTranslations } from "next-intl";
import SelectionLang from "./SelectionLang";
import { ChevronDown } from "lucide-react";

export default function NavbarLinkFreight({
  className,
}: {
  className: string;
}) {
  const pathname = usePathname();
  //   const t = useTranslations("navbarAndFooter");
  const tBtn = useTranslations("");

  // Dropdown menu items
  const menu = (
    <Menu
      items={[
        {
          key: "1",
          label: <Link href={"/services"}>Services</Link>,
        },
        {
          key: "2",
          label: <Link href={"/fees"}>Fees</Link>,
        },
        {
          key: "3",
          label: <Link href={"/local-charge"}>Local Charge</Link>,
        },
        {
          key: "4",
          label: <Link href={"/general-charge"}>General Charge</Link>,
        },
        {
          key: "5",
          label: <Link href={"/carriers"}>Carriers</Link>,
        },
        {
          key: "6",
          label: <Link href={"/tarrifs"}>Tarrifs</Link>,
        },
        {
          key: "7",
          label: <Link href={"/custom-requests"}>Custom Requests</Link>,
        },
      ]}
    />
  );

  return (
    <div className={`${className} customdd `}>
      <Link
        className={`${pathname === "/" && style.active} text-black`}
        href="/"
      >
        Booking
      </Link>

      {/* Dropdown for Rates Management */}
      <Dropdown
        className="customdd"
        menu={{ items: menu.props.items }}
        trigger={["hover"]}
      >
        <span className="flex items-center text-black cursor-pointer">
          Rates Management
          <ChevronDown size={16} className="ml-1" />
        </span>
      </Dropdown>

      <div className="lg:hidden flex items-center gap-2">
        <Button>{tBtn("get_started")}</Button>
        <SelectionLang />
      </div>
    </div>
  );
}
