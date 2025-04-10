import style from "./navbar.module.scss";
import { Link, usePathname } from "@/src/i18n/routing";
import { Button } from "antd";
import { useTranslations } from "next-intl";
import SelectionLang from "./SelectionLang";

export default function NavbarLinks({ className }: { className: string }) {
  const pathname = usePathname();
  const t = useTranslations("navbarAndFooter");
  const tBtn = useTranslations("");

  return (
    <div className={`${className} navbarMobileWrapper`}>
      <Link
        className={`${pathname === "/" && style.active} text-black`}
        href="/"
      >
        {t("home")}
      </Link>
      <Link
        className={`${pathname === "/service" && style.active} text-black`}
        href="/service"
      >
        {t("services")}
      </Link>
      <Link
        className={`${pathname === "/f" && style.active} text-black`}
        href="/"
      >
        {t("features")}
      </Link>
      <Link
        className={`${pathname === "/fa" && style.active} text-black`}
        href="/"
      >
        {t("faq")}
      </Link>

      <div className="lg:hidden flex items-center gap-2">
        <Button>{tBtn("get_started")}</Button>
        <SelectionLang />
      </div>
    </div>
  );
}
