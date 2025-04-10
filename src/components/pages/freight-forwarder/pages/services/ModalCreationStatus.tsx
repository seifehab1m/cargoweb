import ModalStatus from "@/src/components/shared/modal/ModalStatus";
import { Link } from "@/src/i18n/routing";
import { Button } from "antd";
import React from "react";

type StatusType = "success" | "danger" | "warning";

export default function ModalCreationStatus({
  isSuccessModalVisible,
  closeSuccessModal,
  title = "Service has been saved successfully",
  description = "You can now use this service in your rates",
  btnText = "Go to service",
  hrefBtn = "/services",
  status = "success",
}: {
  isSuccessModalVisible: boolean;
  closeSuccessModal: () => void;
  title?: string;
  description?: string;
  btnText?: string;
  hrefBtn?: string;
  status?: StatusType;
}) {
  return (
    <ModalStatus
      title={title}
      desciption={description}
      status={status}
      isVisible={isSuccessModalVisible}
      onClose={closeSuccessModal}
    >
      <div className="flex gap-2">
        <Link href={hrefBtn} className="w-full">
          <Button
            className=" !w-full"
            ghost
            type="primary"
            htmlType="submit"
            block
          >
            {btnText}
          </Button>
        </Link>

        <Button
          type="primary"
          className=" !shadow-none w-full !bg-[#FAFAFA] !text-darkGray  !border-[#D5D7DA]"
          onClick={closeSuccessModal}
        >
          Cancel
        </Button>
      </div>
    </ModalStatus>
  );
}
