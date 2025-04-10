"use client";
import { TitleIcon } from "@/src/assets/images/freight-forwarder/title";
import React from "react";
import TarrifForm from "./TarrifForm";

export default function NewTarrif({ slug }: { slug?: string }) {
  return (
    <main className="container py-10">
      <div className="flex items-center gap-2 pb-11">
        <TitleIcon />
        <h2 className="text-[32px] font-medium text-[#191919]">
          {slug ? "Edit" : "New"} Tarrif
        </h2>
      </div>
      <TarrifForm slug={slug} />
    </main>
  );
}
