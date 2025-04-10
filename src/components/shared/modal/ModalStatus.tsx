import { Modal } from "antd";
import { AlertCircle, CheckCircle } from "lucide-react";
import React from "react";

interface ModalStatusProps {
  title: string;
  desciption: string;
  status: "success" | "danger" | "warning";
  isVisible: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

export default function ModalStatus({
  title,
  desciption,
  status,
  isVisible,
  onClose,
  children,
}: ModalStatusProps) {
  return (
    <Modal
      open={isVisible}
      onCancel={onClose}
      footer={null}
      centered
      width={400}
      className="text-center"
    >
      {status === "success" && (
        <div className="bg-[#DFF2AF] p-3 rounded-full w-fit">
          <CheckCircle className="text-secondary" size={28} />
        </div>
      )}
      {status === "danger" && (
        <div className="bg-[#FEE4E2] p-3 rounded-full w-fit">
          {<AlertCircle className="text-danger" size={28} />}
        </div>
      )}
      <h2
        className={`${
          status === "danger" ? "text-danger" : "text-secondary"
        } text-[18px] font-bold mt-1`}
      >
        {title}
      </h2>
      <p className="mt-1 mb-5 text-sm text-darkGray">{desciption}</p>
      {children}
    </Modal>
  );
}
