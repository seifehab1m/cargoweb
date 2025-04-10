import { getRequest } from "@/src/network/api";
import { Form, Select } from "antd";
import React, { useEffect, useState } from "react";

export default function HSCodeDropDown({
  setHsCodeLookups,
  isRequired=false,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setHsCodeLookups?: any;
  isRequired?: boolean;
}) {
  const [hsCodesAutoComplete, setHsCodesAutoComplete] = useState("");
  const [options, setOptions] = useState([]);

  useEffect(() => {
    if (hsCodesAutoComplete.trim() !== "" && hsCodesAutoComplete.length > 2) {
      getRequest(
        `/tazamun-freight-forwarder/api/v1/HSCodes/autoComplete?text=${hsCodesAutoComplete}`
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
  }, [hsCodesAutoComplete]);

  const handleChange = (value: string[]) => {
    const formattedValue = value.map((id) => ({
      hsCodeLookupId: id,
      id: id,
    }));
    setHsCodeLookups(formattedValue);
  };

  return (
    <Form.Item
      label="HS Codes"
      name="hsCodeLookups"
      style={{ paddingTop: "24px" }}
      rules={[{ required: isRequired, message: "Please enter your Hs Codes" }]}
    >
      <Select
        mode="multiple"
        placeholder="Search HS Codes"
        showSearch
        filterOption={false}
        onSearch={(value) => setHsCodesAutoComplete(value)}
        onChange={handleChange}
        options={options}
      />
    </Form.Item>
  );
}
