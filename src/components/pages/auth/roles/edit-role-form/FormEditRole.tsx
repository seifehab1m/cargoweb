"use client";
import { Form, Input, Tabs, Checkbox, Button, Select, Table } from "antd";
import { Trash2 } from "lucide-react";
import React, { useState } from "react";

interface User {
  value: string;
  label: string;
  description: string;
  email: string;
  phone: string;
  office: string;
}

export default function FormEditRole() {
  const [form] = Form.useForm();
  const [searchValue, setSearchValue] = useState("");
  const [openDropdown, setOpenDropdown] = useState(false);
  const [addedUsers, setAddedUsers] = useState<User[]>([]);

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      console.log("Submitted Values:", values);
    } catch (error) {
      console.error("Validation Failed:", error);
    }
  };

  const handleAddUser = (user: User) => {
    if (!addedUsers.some((u) => u.value === user.value)) {
      setAddedUsers([...addedUsers, user]);
    }
  };

  const handleDeleteUser = (value: string) => {
    setAddedUsers(addedUsers.filter((user) => user.value !== value));
  };

  const usersOptions: User[] = [
    {
      value: "user1",
      label: "User 1",
      description: "Description for User 1",
      email: "user1@example.com",
      phone: "123-456-7890",
      office: "Office A",
    },
    {
      value: "user2",
      label: "User 2",
      description: "Description for User 2",
      email: "user2@example.com",
      phone: "234-567-8901",
      office: "Office B",
    },
    {
      value: "user3",
      label: "User 3",
      description: "Description for User 3",
      email: "user3@example.com",
      phone: "345-678-9012",
      office: "Office C",
    },
    {
      value: "user4",
      label: "User 4",
      description: "Description for User 4",
      email: "user4@example.com",
      phone: "456-789-0123",
      office: "Office D",
    },
  ];

  const filteredOptions = usersOptions.filter((user) =>
    user.label.toLowerCase().includes(searchValue.toLowerCase())
  );

  const columns = [
    { title: "User Name", dataIndex: "label", key: "label" },
    { title: "Email", dataIndex: "email", key: "email" },
    { title: "Phone", dataIndex: "phone", key: "phone" },
    { title: "Office", dataIndex: "office", key: "office" },
    {
      title: "",
      key: "delete",
      render: (_: unknown, record: User) => (
        <Button
          type="text"
          onClick={() => handleDeleteUser(record.value)}
          icon={<Trash2 size={20} />}
        />
      ),
    },
  ];

  const items = [
    {
      label: "Permissions",
      key: "1",
      children: (
        <div className="flex flex-col gap-y-2">
          <h5 className="text-base text-darkGray ">
            Select permissions to add them in this role
          </h5>
          <Form.Item name="containers">
            <Checkbox.Group>
              <div className="flex flex-col gap-2">
                <Checkbox value="service 1">service 1</Checkbox>
                <Checkbox value="service 2">service 2</Checkbox>
                <Checkbox value="service 3">service 3</Checkbox>
                <Checkbox value="service 4">service 4</Checkbox>
              </div>
            </Checkbox.Group>
          </Form.Item>
        </div>
      ),
    },
    {
      label: "Users",
      key: "2",
      children: (
        <div className="flex flex-col gap-y-6">
          <Form.Item name="users">
            <Select
              open={openDropdown}
              onDropdownVisibleChange={setOpenDropdown}
              showSearch
              placeholder="Search and select users"
              filterOption={false}
              onSearch={(value) => setSearchValue(value)}
              dropdownRender={() => (
                <div>
                  {filteredOptions.map((user) => (
                    <div
                      key={user.value}
                      className="flex items-center justify-between p-2 cursor-pointer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div>
                        <h5 className="text-[#191919] text-base">
                          {user.label}
                        </h5>
                        <h6 className="!text-xs text-darkGray pt-1 !font-[300]">
                          {user.description}
                        </h6>
                      </div>
                      <Button
                        type="primary"
                        onClick={() => handleAddUser(user)}
                      >
                        Add
                      </Button>
                    </div>
                  ))}
                </div>
              )}
              style={{ maxWidth: "400px" }}
            />
          </Form.Item>

          {/* {addedUsers.length > 0 && ( */}
            <Table
              dataSource={addedUsers}
              columns={columns}
              pagination={false}
              rowKey="value"
            />
          {/* )} */}
        </div>
      ),
    },
  ];

  return (
    <div className="pt-9">
      <Form
        form={form}
        name="role_form"
        layout="vertical"
        autoComplete="off"
        className="w-full"
      >
        <Form.Item
          name="roleName"
          label="Role Name *"
          rules={[{ required: true, message: "Please enter your role name" }]}
        >
          <Input placeholder="Enter your role name" />
        </Form.Item>
        <div className="auth_wrraper pb-5">
          <Tabs defaultActiveKey="1" items={items} />
        </div>
        <Form.Item>
          <Button type="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
