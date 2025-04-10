import { Form, Upload } from "antd";
import { CloudUpload } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

export default function UploadImage({
  label = "Upload Logo *",
  name = "logo",
}: {
  label?: string;
  name?: string;
}) {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  // Handle file upload
  const handleUpload = (file: File) => {
    const reader = new FileReader();
    reader.onload = () => {
      setImageUrl(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  return (
    <Form.Item
      name={name}
      label={label}
      rules={[{ required: true, message: "Please upload a logo" }]} // ✅ Ensure required validation
      className="w-full "
    >
      <Upload
        showUploadList={false}
        beforeUpload={(file) => {
          handleUpload(file);
          return false; // Prevent automatic upload
        }}
      >
        <div className="border-2 border-dashed p-4 rounded-lg flex gap-4 cursor-pointer w-full items-center">
          {imageUrl ? (
            <Image
              width={50}
              height={100}
              src={imageUrl}
              alt="Uploaded"
              className=" max-w-xs  object-cover rounded-lg h-[50px]"
            />
          ) : (
            <CloudUpload size={35} className="text-primaryLight" />
          )}
          <div className="flex flex-col gap-1">
            <h5 className="text-sm font-[400] text-darkGray">
              <span className="text-primaryLight">Click</span> or drag your
              document here to upload
            </h5>
            <h6 className="text-xs text-[#656565]">
              Only one image of JPG, PNG file up to N MB
            </h6>
          </div>
        </div>
      </Upload>
    </Form.Item>
  );
}
