import { Check } from "lucide-react";
import React from "react";

export default function CheckWithText({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2">
      <Check size={15} className="text-secondary" />
      <p className="text-darkGray">{text}</p>
    </div>
  );
}
