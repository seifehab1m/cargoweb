import { TitleIcon } from "@/src/assets/images/freight-forwarder/title";
import Export from "@/src/components/pages/freight-forwarder/btns/Export";
import { Link } from "@/src/i18n/routing";
import { Button } from "antd";
import { SquarePen } from "lucide-react";

export default function EditHeaderSinglePage({
  title,
  url,
}: {
  title: string;
  url: string;
}) {
  return (
    <div className="w-full flex items-center justify-between  gap-2">
      <div className="flex items-center gap-2 ">
        <TitleIcon />
        <h2 className="text-[32px] font-medium text-[#191919]">{title}</h2>
      </div>
      <div className="flex gap-4">
        <Link href={url}>
          <Button type="primary" htmlType="submit">
            <SquarePen size={15} />
            Edit
          </Button>
        </Link>
        <Export />
      </div>
    </div>
  );
}
