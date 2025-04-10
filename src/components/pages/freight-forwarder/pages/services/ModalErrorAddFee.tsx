import ModalStatus from "@/src/components/shared/modal/ModalStatus";
import { Button } from "antd";
import React from "react";

export default function ModalErrorAddFee({
  isModalVisible,
  closeModal,
  showDrawer,
}: {
  isModalVisible: boolean;
  closeModal: () => void;
  showDrawer: () => void;
}) {
  return (
    <ModalStatus
      title="Error"
      desciption="Please make sure to add one fee at least to make this service valid"
      status="danger"
      isVisible={isModalVisible}
      onClose={closeModal}
    >
      <div className="flex gap-2">
        <Button
          className="w-full "
          type="primary"
          htmlType="submit"
          block
          onClick={() => {
            showDrawer();
            closeModal();
          }}
        >
          Add Fee
        </Button>
        <Button
          type="primary"
          className=" !shadow-none w-full !bg-[#FAFAFA] !text-darkGray  !border-[#D5D7DA]"
          onClick={closeModal}
        >
          Cancel
        </Button>
      </div>
    </ModalStatus>
  );
}
