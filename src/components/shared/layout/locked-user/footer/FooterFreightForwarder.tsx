import React from "react";
import DotLink from "./DotLink";

export default function FooterFreightForwarder() {
  return (
    <div className="py-3 bg-[#D8DFF4] mt-12 w-full">
      <div className="container flex flex-col md:flex-row justify-between items-center gap-3 text-center">
        <p className="text-sm">©2024 Cargoweb, All rights reserved</p>

        <div className="flex flex-wrap justify-center gap-3 md:gap-5">
          <DotLink linkName="Privacy Policy" linkUrl="/privacy-policy" />
          <DotLink linkName="Terms & Conditions" linkUrl="/terms-of-service" />
          <DotLink linkName="Contact us" linkUrl="/contact-us" />
          <DotLink linkName="Help Center" linkUrl="/help-center" />
        </div>
      </div>
    </div>
  );
}
