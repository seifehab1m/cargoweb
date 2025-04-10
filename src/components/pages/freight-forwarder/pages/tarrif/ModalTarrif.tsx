import { Modal } from "antd";
import TarrifForm from "./TarrifForm";

export default function ModalTarrif({
  isModalVisible,
  closeModal,
}: {
  isModalVisible: boolean;
  closeModal: () => void;
}) {
  return (
    <Modal
      title="Add New Tariff"
      open={isModalVisible}
      onCancel={closeModal}
      footer={null}
    >
      <TarrifForm isTarrifModal />
    </Modal>
  );
}
