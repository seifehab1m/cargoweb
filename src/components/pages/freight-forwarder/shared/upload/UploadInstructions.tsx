import { EcoIco } from "@/src/assets/images/svgs/EcoIco";
import React from "react";

export default function UploadInstructions() {
  return (
    <div className="p-4 border rounded-lg">
      <div className="flex gap-2 items-center">
        <EcoIco />
        <h5 className="text-base text-primaryLight">
          Dear user, please consider these steps in order to ensure a smooth
          upload for your rates:
        </h5>
      </div>
      <ol className="list-decimal list-decimal-upload list-inside ps-9 flex flex-col gap-1 pt-2">
        <li className="text-sm text-darkGray !font-[400] font-outfit">
          <span className="text-titleColor font-medium text-sm pe-1">
            Download the Excel Template:
          </span>
          Click the download rates template button and select a template from
          the dropdown to get the pre-formatted Excel file.
        </li>
        <li className="text-sm text-darkGray !font-[400] font-outfit">
          <span className="text-titleColor font-medium text-sm pe-1">
            Fill in the Details
          </span>
          Enter the required information in the provided columns without
          changing the structure
        </li>
        <li className="text-sm text-darkGray !font-[400] font-outfit">
          <span className="text-titleColor font-medium text-sm pe-1">
            Upload Your File:
          </span>
          Once completed, upload the filled-out Excel file.
        </li>
        <h5 className="text-darkGray text-sm">
          By following these steps, youll guarantee that your data aligns
          perfectly with our system, leading to a seamless upload process.
        </h5>
      </ol>
      <div className="pt-4 flex items-center gap-3 ps-9 text-sm">
        <h5 className="text-primaryLight ">Dismiss and dont show again</h5>
        <h6 className="text-darkGray">Learn more</h6>
      </div>
    </div>
  );
}
