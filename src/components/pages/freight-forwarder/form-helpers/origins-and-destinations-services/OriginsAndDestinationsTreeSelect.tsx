import React, { useEffect, useState } from "react";
import { Form, message, TreeSelect } from "antd";
import { getRequest } from "@/src/network/api";
import {
  ItemTypeOriginsAndDestinations,
  TreeSelectProps,
  TREESELECTTYPE,
} from "../formTypes";
import { useSearchParams } from "next/navigation";

const OriginsAndDestinationsTreeSelect: React.FC<TreeSelectProps> = ({
  name,
  label,
  required = false,
  setOptions: setOrigins,
  // intailValue,
}) => {
  const [searchValue, setSearchValue] = useState("");
  const [treeData, setTreeData] = useState<TREESELECTTYPE[]>([]);
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const originIntialValue = searchParams.getAll("origins");
  const destinationIntialValue = searchParams.getAll("destinations");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleTreeData = (data: any) => {
    return Object.entries(data)?.map(([key, value]) => ({
      value: key,
      title: key,
      selectable: false,
      children: Array.isArray(value)
        ? value.map((item: ItemTypeOriginsAndDestinations) => ({
            value: item.localizedAutoCompleteName,
            title: item.localizedAutoCompleteName,
            fullData: item,
          }))
        : [],
    }));
  };

  useEffect(() => {
    if (searchValue.trim() !== "" && searchValue.length > 2) {
      setLoading(true);
      getRequest(
        `/tazamun-freight-forwarder/api/v1/Countries/origins-destination-autoComplete?text=${searchValue}`
      )
        .then((res) => {
          setTreeData(handleTreeData(res?.data) || []);
        })
        .catch(() => message.error("Something went wrong"))
        .finally(() => setLoading(false));
    } else {
      setTreeData([]);
    }
  }, [searchValue]);
  

  const handleChange = (selectedValues: string[]) => {
    const allItems = treeData.flatMap((parent) => parent.children || []);
    const selectedObjects = allItems
      .filter((item) => selectedValues.includes(item.value))
      .map((item) => ({
        ...item.fullData,
        portId: item?.fullData?.id,
        LocationData: " ",
      })) as ItemTypeOriginsAndDestinations[];

    if (setOrigins) setOrigins(selectedObjects);
  };

  return (
    <Form.Item
      name={name}
      label={label}
      initialValue={
        name === "origins" ? originIntialValue : destinationIntialValue
      }
      rules={[{ required, message: `Please select ${name}` }]}
    >
      <TreeSelect
        showSearch
        style={{ width: "100%" }}
        onSearch={(val) => setSearchValue(val)}
        dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
        allowClear
        multiple
        treeDefaultExpandAll
        treeData={treeData}
        loading={loading}
        filterTreeNode={false}
        onChange={handleChange} // Capture selected values
      />
    </Form.Item>
  );
};

export default OriginsAndDestinationsTreeSelect;
