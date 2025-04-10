import { Check } from "lucide-react";
import React from "react";

export default function CheckedTitle({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-1">
      <Check size={15} />
      <h5 className="text-sm ">{text}</h5>
    </div>
  );
}
