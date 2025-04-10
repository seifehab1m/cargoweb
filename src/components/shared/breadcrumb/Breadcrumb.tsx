import { Link } from "@/src/i18n/routing";
import { ChevronRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import React from "react";

interface BreadcrumbProps {
  linkName: string;
  href: string;
}
export default async function Breadcrumb({
  links,
}: {
  links: BreadcrumbProps[];
}) {
  const t = await getTranslations("breadcrumb");
  if (!links) return null;

  return (
    <div className="flex items-center w-full">
      {links?.map((breadcrumb, index) => (
        <div key={index} className="flex items-center gap-1">
          {index !== links.length - 1 ? (
            <Link className="text-darkGray" href={breadcrumb?.href}>
              {t(breadcrumb?.linkName)}
            </Link>
          ) : (
            <span className="text-primary"> {t(breadcrumb?.linkName)}</span>
          )}
          {index !== links.length - 1 && (
            <ChevronRight className="w-4 h-4 text-gray-500" />
          )}
        </div>
      ))}
    </div>
  );
}
