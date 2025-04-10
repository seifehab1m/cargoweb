"use client";
import React, { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Layout, Menu } from "antd";

const { Header, Sider, Content } = Layout;

export default function SideBar({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout className="!min-h-screen">
      {/* Full-width Header */}
      <Header className="w-full bg-gray-200 flex items-center px-4">
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          style={{ fontSize: "16px", width: 64, height: 64 }}
        />
      </Header>

      {/* Sidebar and Content Layout */}
      <Layout className="flex">
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          width={200}
          collapsedWidth={0}
          className="h-full"
        >
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={[
              { key: "1", label: "Nav 1" },
              { key: "2", label: "Nav 2" },
              { key: "3", label: "Nav 3" },
            ]}
          />
        </Sider>

        <Content className="p-6 bg-white">{children}</Content>
      </Layout>
    </Layout>
  );
}
