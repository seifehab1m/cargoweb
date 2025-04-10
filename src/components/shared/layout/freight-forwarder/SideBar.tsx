"use client";
import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu } from "antd";

const { Header, Sider, Content } = Layout;

export default function SideBar({children}: {children: React.ReactNode}) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout className="!min-h-screen !h-full ">
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        width={200} // Adjust sidebar width
        collapsedWidth={0} // Hide completely when collapsed
      >
        <div className="demo-logo-vertical" />
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
      <Layout>
        <Header style={{ padding: 550 , background: "#F5F5F5 !important"}}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64, 
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}
