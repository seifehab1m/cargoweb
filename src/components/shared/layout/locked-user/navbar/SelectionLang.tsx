import { usePathname, useRouter } from "@/src/i18n/routing";
import { Select } from "antd";
import { useLocale } from "next-intl";
import React from "react";

export default function SelectionLang() {
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();

  const handleLocaleChange = (locale: string) => {
    router.push(`/${locale}${pathname}`);
  };

  return (
    <Select
      defaultValue={locale.toUpperCase()}
      style={{ width: 60,height:"fit-content" }}
      onChange={handleLocaleChange}
      options={[
        { value: "en", label: "en" },
        { value: "ar", label: "ar" },
      ]}
    />
  );
}
