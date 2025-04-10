"use client";
import { CsvIcon } from "@/src/assets/images/svgs/CsvIcon";
import { Form, Upload, Progress } from "antd";
import { CloudUpload } from "lucide-react";
import React, { useState } from "react";

export default function UploadFile({
  label,
  name,
  loadingTextFile,
}: {
  label: string;
  name: string;
  loadingTextFile: string;
}) {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [fileUrl, setFileUrl] = useState<string | null>(null);
  const [fileList, setFileList] = useState();

  const handleUpload = (file: File) => {
    const reader = new FileReader();

    reader.onloadstart = () => setUploadProgress(0);

    reader.onprogress = (event) => {
      if (event.total) {
        const percent = Math.round((event.loaded / event.total) * 100);
        setUploadProgress(percent);
      }
    };

    reader.onload = () => {
      setFileUrl(reader.result as string);
      setUploadProgress(100);
    };

    reader.readAsDataURL(file);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = ({ fileList: newFileList }: any) => {
    setFileList(newFileList);
  };

  return (
    <Form.Item
      name={name}
      label={label}
      rules={[{ required: true, message: "Please upload a file" }]}
      className="w-full !mt-6"
    >
      <Upload
        fileList={fileList}
        onChange={handleChange}
        beforeUpload={(file) => {
          handleUpload(file);
          return false; // Prevent automatic upload
        }}
        showUploadList={false}
      >
        <div className="border-2 border-dashed p-4 rounded-lg flex gap-4 cursor-pointer  max-w-80 items-center">
          {fileUrl ? (
            <div className=" w-full gap-4">
              <div className="flex items-center gap-2 w-full">
                <CsvIcon />
                <h5 className="text-sm text-darkGray ">{loadingTextFile}</h5>
              </div>
              <Progress
                percent={uploadProgress}
                status="active"
                className="flex-1"
              />
            </div>
          ) : (
            <>
              <CloudUpload size={35} className="text-primaryLight" />
              <div className="flex flex-col gap-1">
                <h5 className="text-sm font-[400] text-darkGray">
                  <span className="text-primaryLight">Click</span> or drag your
                  file here to upload
                </h5>
                <h6 className="text-xs text-[#656565]">
                  Upload PDF, DOCX, ZIP files up to N MB
                </h6>
              </div>
            </>
          )}
        </div>
      </Upload>
    </Form.Item>
  );
}
