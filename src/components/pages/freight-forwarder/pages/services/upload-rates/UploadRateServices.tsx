"use client";
import UploadFile from "@/src/components/pages/freight-forwarder/form-helpers/UploadFile";
import { Button, Form, message, Progress, Switch } from "antd";
import { useState } from "react";
import UploadInstructions from "../../../shared/upload/UploadInstructions";
import TitleAndDescribtion from "@/src/components/shared/title-description/TitleAndDescribtion";

export default function UploadRatesAndFiles({
  url,
  fileType,
  fileName,
}: {
  url: string;
  fileType?: string;
  fileName?: string;
}) {
  const [loading, setLoading] = useState(false);
  const [ratesFile, setRatesFile] = useState(null);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleImport = async (values: any) => {
    const file = values.rates?.fileList?.[0]?.originFileObj;
    if (!file) {
      message.error("Please select a file to import.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      setLoading(true);
      const res = await fetch(url, {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      setRatesFile(data);
      message.success("file imported successfully!");
      //eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.error("Import failed", err);
      message.error("Failed to import rates.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {ratesFile ? (
        <>
          {fileType === "service" && (
            <div className="flex flex-col gap-y-4">
              <div className="bg-[#FAFAFA] p-4 border rounded-lg mt-4">
                <h2 className="text-primary text-lg mb-2">Import Status</h2>
                <div className="flex items-center gap-2 rounded-[10px] w-fit border p-[3px] mb-4">
                  <div className="flex gap-2 items-center border rounded-lg p-[3px]">
                    <div className="circle w-2 h-2 bg-secondary rounded-full" />
                    <h5 className="text-sm text-darkGray pb-1 !font-medium">
                      import done
                    </h5>
                  </div>
                  <h5 className="text-sm text-darkGray pb-1 !font-[400]">
                    Rates imported successfully
                  </h5>
                </div>
                <Progress percent={100} className="mt-6" />
              </div>

              <div className="bg-[#FAFAFA] p-4 border rounded-lg mt-4">
                <h2 className="text-primary text-lg mb-2">Contract Data</h2>
                <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 gap-y-6">
                  <TitleAndDescribtion
                    title="Tariff name"
                    description="Contract name"
                  />
                  <TitleAndDescribtion title="Mode" description="Mode Name" />
                  <TitleAndDescribtion
                    title="Currency"
                    description="Currency Name"
                  />
                  <TitleAndDescribtion title="Valid From" description="Date" />
                  <TitleAndDescribtion title="Valid To" description="Date" />
                  <TitleAndDescribtion
                    title="Carrier"
                    description="Carrier Name"
                  />
                </div>
              </div>

              <div className="bg-[#FAFAFA] p-4 border rounded-lg mt-4">
                <h2 className="text-primary text-lg mb-2">Services</h2>
                <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 gap-y-6">
                  <TitleAndDescribtion
                    title="Total services found"
                    description="200"
                  />
                  <TitleAndDescribtion
                    title="Services created successfully"
                    description="100"
                  />
                  <TitleAndDescribtion title="Errors" description="100" />
                </div>
              </div>
            </div>
          )}

          {fileType === "local" && (
            <>
              <div className="bg-[#FAFAFA] p-4 border rounded-lg mt-4">
                <h2 className="text-primary text-lg mb-2">Import Status</h2>
                <div className="flex items-center gap-2 rounded-[10px] w-fit border p-[3px] mb-4">
                  <div className="flex gap-2 items-center border rounded-lg p-[3px]">
                    <div className="circle w-2 h-2 bg-secondary rounded-full" />
                    <h5 className="text-sm text-darkGray pb-1 !font-medium">
                      import done
                    </h5>
                  </div>
                  <h5 className="text-sm text-darkGray pb-1 !font-[400]">
                    Charges imported successfully
                  </h5>
                </div>
                <Progress percent={100} className="mt-6" />
              </div>
              <div className="bg-[#FAFAFA] p-4 border rounded-lg mt-4">
                <h2 className="text-primary text-lg mb-2">Local Charges</h2>
                <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 gap-y-6">
                  <TitleAndDescribtion
                    title="Total charges found"
                    description="200"
                  />
                  <TitleAndDescribtion title="Charges created successfully " description="100" />
                  <TitleAndDescribtion
                    title="Errors"
                    description="100"
                  />
                
                </div>
              </div>
            </>
          )}
          {fileType === "general" && <>
              <div className="bg-[#FAFAFA] p-4 border rounded-lg mt-4">
                <h2 className="text-primary text-lg mb-2">Import Status</h2>
                <div className="flex items-center gap-2 rounded-[10px] w-fit border p-[3px] mb-4">
                  <div className="flex gap-2 items-center border rounded-lg p-[3px]">
                    <div className="circle w-2 h-2 bg-secondary rounded-full" />
                    <h5 className="text-sm text-darkGray pb-1 !font-medium">
                      import done
                    </h5>
                  </div>
                  <h5 className="text-sm text-darkGray pb-1 !font-[400]">
                    Charges imported successfully
                  </h5>
                </div>
                <Progress percent={100} className="mt-6" />
              </div>
              <div className="bg-[#FAFAFA] p-4 border rounded-lg mt-4">
                <h2 className="text-primary text-lg mb-2">General Charges</h2>
                <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 gap-y-6">
                  <TitleAndDescribtion
                    title="Total charges found"
                    description="200"
                  />
                  <TitleAndDescribtion title="Charges created successfully " description="100" />
                  <TitleAndDescribtion
                    title="Errors"
                    description="100"
                  />
                
                </div>
              </div>
            </>}
        </>
      ) : (
        <>
          <UploadInstructions />
          <Form name="register" layout="vertical" onFinish={handleImport}>
            <div className="bg-[#FAFAFA] p-4 border rounded-lg mt-4">
              <h2 className="text-primary text-lg mb-2">
                Upload and Import Your Rates
              </h2>
              <UploadFile
                label={fileName + "*"}
                name="rates"
                loadingTextFile="Rates For May 2025"
              />

              {fileType === "service" && (
                <>
                  <Form.Item
                    className="!mt-4"
                    name="importRates"
                    valuePropName="checked"
                    initialValue={false}
                  >
                    <div className="flex items-center gap-2">
                      <Switch />
                      <h5>Notify me when rates are about to expire</h5>
                    </div>
                  </Form.Item>

                  <Form.Item
                    className="!mt-4"
                    name="publishRates"
                    valuePropName="checked"
                    initialValue={false}
                  >
                    <div className="flex items-center gap-2">
                      <Switch />
                      <h5>Publish rates immediately after import</h5>
                    </div>
                  </Form.Item>
                </>
              )}

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="mt-6"
                  loading={loading}
                >
                  Start Import
                </Button>
              </Form.Item>
            </div>
          </Form>
        </>
      )}
    </>
  );
}

// const response = await fetch(
//   "https://tazamun-freight.tazdev.dev/tazamun-freight-forwarder/api/v1/localcharges/import",
//   {
//     method: "POST",
//     body: formData,
//   }
// );

// const response = await fetch(
//   "https://tazamun-freight.tazdev.dev/tazamun-freight-forwarder/api/v1/generalcharges/import",
//   {
//     method: "POST",
//     body: formData,
//   }
// );
