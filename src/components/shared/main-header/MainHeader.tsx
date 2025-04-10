import { TitleIcon } from "@/src/assets/images/freight-forwarder/title";

export default function MainHeader({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-2 pb-11">
      <TitleIcon />
      <h2 className="text-[32px] font-medium text-[#191919]">{title}</h2>
    </div>
  );
}
