"use client";

import { Layout, Button, Pagination, Dropdown, Row, Col, Grid, Tabs, DatePicker, Slider, Upload, Card, Space, Drawer, Modal } from "antd";
import { HomeOutlined, PlusCircleFilled, DownOutlined, UploadOutlined } from "@ant-design/icons";
import "antd/dist/reset.css";
import "./globals.css";
import Link from "next/link";
import Image from 'next/image'
import { useState } from "react";

const { Header, Footer, Sider, Content } = Layout;
const { useBreakpoint } = Grid;
const { RangePicker } = DatePicker;


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const items = [
    { key: "1", label: <Link href="/">Home</Link> },
    { key: "2", label: <Link href="/blog">Blog</Link> },
    {
      key: "3",
      label: (
        <a href="https://ant.design" target="_blank" rel="noreferrer">
          Ant Design Docs
        </a>
      ),
    },
  ];

  const screens = useBreakpoint();
  const [value, setValue] = useState<number>(30);
  const [open, setOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <html lang="en">
      <body>
        <Layout className="layout-container">
          <Header className="layout-header">
            <Link href="/" className="nav-link-margin">
              Home
            </Link>
            <Link href="/blog" className="nav-link-margin">
              Blog
            </Link>
          </Header>

          <Layout className="flex-1">
            <Sider
              width={200}
              breakpoint="lg"
              collapsedWidth="0"
              className="layout-sider"
            >
              <p className="sidebar-title">Sidebar</p>
              <ul className="sidebar-list">
                <li>
                  <Link href="/" className="nav-link">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="nav-link">
                    Blog
                  </Link>
                </li>
              </ul>
            </Sider>

            <Content className="layout-content">
              {children}

              <Image
                src="https://media.wired.com/photos/5926ffe47034dc5f91bed4e8/master/pass/google-logo.jpg"
                alt="Picture of the author"
                width={500}
                height={500}
              />

              <div className="btn-section">
                <Button block icon={<HomeOutlined />} href="/">
                  Home
                </Button>
                <Button shape="round" icon={<PlusCircleFilled />} href="/blog">
                  Blog
                </Button>
                <Button shape="round" disabled icon={<PlusCircleFilled />}>
                  Disabled
                </Button>
              </div>

              <Row gutter={[24, 24]}>
                {Array.from({ length: 12 }).map((_, i) => (
                  <Col span={2} key={`row1-${i}`}>
                    <div className="grid-row-col-1">
                      Row 1 Col {i + 1}
                    </div>
                  </Col>
                ))}
              </Row>

              <Row gutter={[24, 24]} className="mt-6">
                {Array.from({ length: 12 }).map((_, i) => (
                  <Col span={2} key={`row2-${i}`}>
                    <div className="grid-row-col-2">
                      Row 2 Col {i + 1}
                    </div>
                  </Col>
                ))}
              </Row>

              <Row gutter={[24, 24]} className="mt-6">
                {Array.from({ length: 12 }).map((_, i) => (
                  <Col span={2} key={`row3-${i}`}>
                    <div className="grid-row-col-3">
                      Row 3 Col {i + 1}
                    </div>
                  </Col>
                ))}
              </Row>

              <Tabs
                defaultActiveKey="1"
                centered
                items={[
                  {
                    label: "Tab 1",
                    key: "1",
                    children: "Content of Tab 1",
                    icon: <DownOutlined />,
                  },
                  {
                    label: "Tab 2",
                    key: "2",
                    children: "Content of Tab 2",
                    icon: <DownOutlined />,
                  },
                  {
                    label: "Tab 3",
                    key: "3",
                    children: "Content of Tab 3",
                    icon: <DownOutlined />,
                  },
                ]}
              />

              <div className="mt-6">
                <h3 className="mb-2 font-semibold">Pick a date:</h3>
                <DatePicker
                  format="DD/MM/YYYY"
                />

                <h3 className="mt-6 mb-2 font-semibold">Pick a date range:</h3>
                <RangePicker
                  format="DD/MM/YYYY"
                />
              </div>

              <Slider
                min={0}
                max={100}
                step={10}
                value={value}
                onChange={(val) => setValue(val)}
              />

              <Upload style={{ border: "2px dashed #1890ff", padding: "20px", borderRadius: "8px" }} action="/api/upload" listType="text">
                <Button icon={<UploadOutlined />}>Click to Upload</Button>
              </Upload>

              <Space split direction="horizontal" size={16}>
                <Card variant="borderless" title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
                  <p>Card content</p>
                  <p>Card content</p>
                  <p>Card content</p>
                </Card>
                <Card variant="borderless" size="small" title="Small size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
                  <p>Card content</p>
                  <p>Card content</p>
                  <p>Card content</p>
                </Card>
              </Space>
              <br></br>

              <Button type="primary" onClick={showDrawer}>
                Open
              </Button>
              <Drawer
                title="Basic Drawer"
                closable={{ 'aria-label': 'Close Button' }}
                onClose={onClose}
                open={open}
              >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
              </Drawer>
              <br></br>

              <Button type="primary" onClick={showModal}>
                Open Modal
              </Button>
              <Modal
                title="Basic Modal"
                closable={{ 'aria-label': 'Custom Close Button' }}
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
              >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
              </Modal>

              <div className="mt-6 text-gray-600">
                {screens.md ? "You are on Desktop" : "You are on Mobile"}
              </div>

              <Pagination
                align="center"
                responsive
                total={120}
                className="pagination"
              />

              <Dropdown menu={{ items }} placement="bottom" trigger={["click"]}>
                <Button>
                  Menu <DownOutlined />
                </Button>
              </Dropdown>
            </Content>
          </Layout>

          <Footer className="layout-footer">© 2025 My App</Footer>
        </Layout>
      </body>
    </html>
  );
}
