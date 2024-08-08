import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu } from 'antd';

const { Header, Sider, Content } = Layout;

const NavApp = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const menuItems = [
    { key: '1', icon: <UserOutlined />, label: 'Admin', link: '/admin' },
    { key: '2', icon: <VideoCameraOutlined />, label: 'Students', link: '/students' },
    { key: '3', icon: <LogoutOutlined />, label: 'Logout', link: '/logout' },
  ];

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider trigger={null} collapsible collapsed={collapsed} className="sider">
        <div className="logo">
          <img
            src="https://student.saylaniwelfare.com/assets/logo-OpazD70S.png"
            alt="Logo"
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} onClick={toggleCollapsed}>
          {menuItems.map(item => (
            <Menu.Item key={item.key} icon={item.icon}>
              <Link to={item.link}>{item.label}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="header">
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={toggleCollapsed}
            className="trigger"
          />
        </Header>
        <Content className="content">
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default NavApp;
