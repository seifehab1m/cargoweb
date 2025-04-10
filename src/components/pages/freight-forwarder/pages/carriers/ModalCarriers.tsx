import { Modal } from "antd";

import CarrierFormModal from "./CarrierFormModal";

export default function ModalCarriers({
  isModalVisible,
  closeModal,
}: {
  isModalVisible: boolean;
  closeModal: () => void;
}) {
  return (
    <Modal
      title="Add New Carrier"
      open={isModalVisible}
      onCancel={closeModal}
      footer={null}
    >
      <CarrierFormModal />
    </Modal>
  );
}
