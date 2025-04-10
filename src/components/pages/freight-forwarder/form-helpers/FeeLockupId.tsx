import { getRequest } from "@/src/network/api";
import { Form, Select } from "antd";
import React, { useEffect, useState } from "react";

interface OptionType {
  label: string;
  value: string | number;
}

export default function FeeLockupId({
  setFeeCodeName,
  required=true
}: {
  required?: boolean;
  setFeeCodeName?: (label: string) => void;
}) {
  const [feeLockupId, setFeeLockupId] = useState("");
  const [options, setOptions] = useState<OptionType[]>([]); // Explicitly typed state

  useEffect(() => {
    if (feeLockupId.trim() !== "" && feeLockupId.length > 2) {
      getRequest(
        `/tazamun-freight-forwarder/api/v1/FeesLookups/autoComplete?text=${feeLockupId}`
      ).then((res) => {
        setOptions(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          res?.data?.map((item: any) => ({
            label: item?.localizedAutoCompleteName,
            value: item?.id,
          })) || []
        );
      });
    }
  }, [feeLockupId]);

  const handleChange = (
    _: string | number,
    option?: OptionType | OptionType[]
  ) => {
    if (Array.isArray(option)) {
      // If multiple mode is enabled, option will be an array
      setFeeCodeName?.(option.map((opt) => opt.label).join(", "));
    } else if (option) {
      // Single select mode
      setFeeCodeName?.(option.label);
    }
  };

  return (
    <Form.Item
      label={required?"Fee code and name *":"Fee code and name"}
      name="feeLookupId"
      rules={[{ required, message: "Fee code and name is required" }]}
    >
      <Select
        placeholder="Search for Fee name"
        showSearch
        filterOption={false}
        onSearch={(value) => setFeeLockupId(value)}
        onChange={handleChange}
        options={options}
      />
    </Form.Item>
  );
}
