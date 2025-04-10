import React, { useState } from "react";
import {  Input, Button, Space, Typography } from "antd";

const { Text } = Typography;

const items = [
  {
    key: "1",
    label: (
      <div>
        <Text strong>Item 1</Text>
        <p style={{ margin: 0, color: "gray" }}>Description of item 1</p>
        <Button type="primary" size="small">Action</Button>
      </div>
    ),
  },
  {
    key: "2",
    label: (
      <div>
        <Text strong>Item 2</Text>
        <p style={{ margin: 0, color: "gray" }}>Description of item 2</p>
        <Button type="primary" size="small">Action</Button>
      </div>
    ),
  },
  {
    key: "3",
    label: (
      <div>
        <Text strong>Item 3</Text>
        <p style={{ margin: 0, color: "gray" }}>Description of item 3</p>
        <Button type="primary" size="small">Action</Button>
      </div>
    ),
  },
];

const AddUsersDropDown = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredItems, setFilteredItems] = useState(items);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSearch = (e:any) => {
    const value = e.target.value.toLowerCase();
    setSearchText(value);
    setFilteredItems(
      items.filter((item) =>
        item.label.props.children[0].props.children.toLowerCase().includes(value)
      )
    );
  };

  return (
    <div style={{ width: 300, border: "1px solid #ddd", borderRadius: 4, padding: 8 }}>
      <Input
        placeholder="Search..."
        value={searchText}
        onChange={handleSearch}
        style={{ marginBottom: 8 }}
      />
      <Space direction="vertical" style={{ width: "100%" }}>
        {filteredItems.map((item) => (
          <div key={item.key} style={{ padding: 8, borderBottom: "1px solid #f0f0f0" }}>
            {item.label}
          </div>
        ))}
      </Space>
    </div>
  );
};

export default AddUsersDropDown;
