// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import React, { useEffect, useState } from "react";
import { Form, message, TreeSelect } from "antd";
import { getRequest } from "@/src/network/api";
import {
  ItemTypeOriginsAndDestinations,
  TreeSelectProps,
  TREESELECTTYPE,
} from "./formTypes";
import { useSearchParams } from "next/navigation";

const ConditionalOriginsAndDestinationTreeSelect: React.FC<TreeSelectProps> = ({
  name,
  label,
  required = false,
  setOptions: setOrigins,
}) => {
  const [searchValue, setSearchValue] = useState("");
  const [treeData, setTreeData] = useState<TREESELECTTYPE[]>([]);
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const originIntialValue = searchParams.getAll("origins");
  const destinationIntialValue = searchParams.getAll("destinations");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleTreeData = (data: any) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return data.map((country: any) => ({
      value: country.id,
      title: country.localizedAutoCompleteName,
      selectable: true,
      fullData: {
        id: country.id,
        portId: country.id,
        countryId: country.id,
        locationData: "string",
      },
      children: [
        {
          title: "SeaPorts",
          value: `seaPorts-${country.id}`,
          selectable: false,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          children: country.seaPorts.map((port: any) => ({
            value: port.id,
            title: port.localizedAutoCompleteName,
            selectable: true,
            fullData: {
              id: port.id,
              portId: port.portId,
              countryId: port.countryId,
              locationData: "string",
            },
          })),
        },
        {
          title: "AirPorts",
          value: `airPorts-${country.id}`,
          selectable: false,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          children: country.airPorts.map((airport: any) => ({
            value: airport.id,
            title: airport.localizedAutoCompleteName,
            selectable: true,
            fullData: {
              id: airport.id,
              portId: airport.portId,
              countryId: airport.countryId,
              locationData: "string",
            },
          })),
        },
      ],
    }));
  };

  useEffect(() => {
    if (searchValue.trim() !== "" && searchValue.length > 2) {
      setLoading(true);
      getRequest(
        `/tazamun-freight-forwarder/api/v1/LocalCharges/origin-destination-autoComplete?text=${searchValue}`
      )
        .then((res) => {
          const formattedData = handleTreeData(res?.data || []);
          setTreeData(formattedData);
        })
        .catch(() => message.error("Something went wrong"))
        .finally(() => setLoading(false));
    } else {
      setTreeData([]);
    }
  }, [searchValue]);

  const handleChange = (selectedValues: string[]) => {
    const allItems = treeData.flatMap((country) => [
      country,
      ...(country.children || []).flatMap((group) => group.children || []),
    ]);

    const selectedObjects = allItems
      .filter((item) => selectedValues.includes(item.value))
      .map((item) => item.fullData) as ItemTypeOriginsAndDestinations[];

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
        labelInValue
        style={{ width: "100%" }}
        onSearch={(val) => setSearchValue(val)}
        dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
        allowClear
        multiple
        treeDefaultExpandAll
        treeData={treeData}
        loading={loading}
        filterTreeNode={false}
        onChange={(selectedItems) => {
          const selectedValues = Array.isArray(selectedItems)
            ? selectedItems.map((item) => item.value)
            : [selectedItems.value];

          handleChange(selectedValues);
        }}
      />
    </Form.Item>
  );
};

export default ConditionalOriginsAndDestinationTreeSelect;
