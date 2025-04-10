import ModalStatus from "@/src/components/shared/modal/ModalStatus";
import { Link } from "@/src/i18n/routing";
import { Button } from "antd";
import React from "react";

export default function ModalSuccessGenralCharge({
  isVisible,
  onClose,
}: {
  isVisible: boolean;
  onClose: () => void;
}) {
  return (
    <ModalStatus
      title="General Charge has been saved successfully"
      desciption="You can now use this service in your rates"
      status="success"
      isVisible={isVisible}
      onClose={onClose}
    >
      <div className="flex gap-2">
        <Link href={"/general-charge"} className="w-full">
          <Button
            className=" !w-full"
            ghost
            type="primary"
            htmlType="submit"
            block
          >
            Go to General Charge
          </Button>
        </Link>

        <Button
          type="primary"
          className=" !shadow-none w-full !bg-[#FAFAFA] !text-darkGray  !border-[#D5D7DA]"
          onClick={onClose}
        >
          Cancel
        </Button>
      </div>
    </ModalStatus>
  );
}
