import React, { useState } from "react";
import { Layout, Avatar, Typography, Menu, Button, Modal } from "antd";
import { UserOutlined } from "@ant-design/icons";
import {
  TrophyOutlined,
  ContainerOutlined,
  BarChartOutlined,
  ExperimentOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import LoginForm from "./LoginForm";
import "./index.css";

const { Header, Footer, Sider, Content } = Layout;

const items = [
  { key: "1", icon: <PieChartOutlined />, label: "Pie-Charts" },
  { key: "2", icon: <BarChartOutlined />, label: "Graphs" },
  { key: "3", icon: <ContainerOutlined />, label: "Forms" },
  {
    key: "sub1",
    label: "Research Data",
    icon: <ExperimentOutlined />,
    children: [
      { key: "5", label: "Primary Data" },
      { key: "6", label: "Secondary  Data" },
      { key: "7", label: "Cross-Sectional Data" },
      { key: "8", label: "Categorical Data" },
    ],
  },
  {
    key: "sub2",
    label: "Frontline Projects",
    icon: <TrophyOutlined />,
    children: [
      { key: "9", label: "Project A" },
      { key: "10", label: "Project B" },
      {
        key: "sub3",
        label: "Partnerships",
        children: [
          { key: "11", label: "Key Partners" },
          { key: "12", label: "Other" },
        ],
      },
    ],
  },
];

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingTop: "10px",
          paddingBottom: "10px",
          backgroundColor: "hsla(180, 12.50%, 18.80%, 0.86)",
        }}
      >
        <Typography>
          <Typography.Title
            level={1}
            style={{
              color: "white",
              margin: 0,
              fontVariantCaps: "all-petite-caps",
            }}
          >
            logo
          </Typography.Title>
        </Typography>

        <Avatar
          icon={<UserOutlined />}
          style={{ float: "right", cursor: "pointer" }}
          onClick={showModal}
        />
      </Header>

      <Layout>
        <Sider
          style={{
            backgroundColor: "hsla(180, 6.10%, 58.20%, 0.99)",
            minWidth: "200px",
          }}
        >
          <div style={{ minWidth: 200 }}>
            <Button
              type="secondary"
              onClick={toggleCollapsed}
              style={{ marginBottom: 16 }}
            >
              {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </Button>
            <Menu
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              mode="inline"
              theme="light"
              inlineCollapsed={collapsed}
              items={items}
              className="custom-menu"
            />
          </div>
        </Sider>
        <Content
          style={{
            padding: "24px",
            backgroundImage: 'url("/bg.jpg")',
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
          }}
        ></Content>
      </Layout>
      <Footer
        style={{
          textAlign: "center",
          backgroundColor: "hsla(180, 12.50%, 18.80%, 0.86)",
          color: "white",
        }}
      >
        Ant Design Dashboard ©2023 Created by Lilu
      </Footer>

      <Modal
        title="User Login"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <LoginForm onClose={handleCancel} />
      </Modal>
    </Layout>
  );
};

export default App;
