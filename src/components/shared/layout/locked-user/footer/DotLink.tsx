import { Link } from "@/src/i18n/routing";
import { Dot } from "lucide-react";
import React from "react";

export default function DotLink({
  linkName,
  linkUrl,
}: {
  linkName: string;
  linkUrl: string;
}) {
  if (!linkUrl) return null;
  return (
    <div className="flex items-center gap-2">
      <Dot size={20} />
      <Link href={linkUrl}>{linkName}</Link>
    </div>
  );
}
