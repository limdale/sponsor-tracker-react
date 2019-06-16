import React from "react";
import { Layout, Menu, Icon } from "antd";
import { Link } from "react-router-dom";
import "./styles.css";
const { Header } = Layout;

const AppHeader = () => (
  <Header className="header">
    <Icon type="dribbble-circle" theme="filled" className="logo" />
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={["1"]}
      style={{ lineHeight: "64px", textAlign: "right" }}
    >
      <Menu.Item key="1">
        <Link to="/">Companies</Link>
      </Menu.Item>

      <Menu.Item key="2">
        <Link to="/about">About</Link>
      </Menu.Item>

      <Menu.Item key="3">Login</Menu.Item>
      <Menu.SubMenu
        key="4"
        title={
          <span>
            <Icon type="user" />
          </span>
        }
      >
        <Menu.Item key="5">Logout</Menu.Item>
      </Menu.SubMenu>
    </Menu>
  </Header>
);

export default AppHeader;
