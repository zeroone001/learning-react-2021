import React from 'react';
import { Layout, Typography, Input, Dropdown, Menu, Button } from 'antd';
import { GlobalOutlined } from "@ant-design/icons"
import styles from "./Header.module.css";

export const Header:React.FC = () => {
  return (
    <div className={styles['app-header']}>
        {/* top-header */}
        <div>
          <Typography.Text>让旅游更幸福</Typography.Text>
          <Dropdown.Button
            style={{marginLeft: 15}}
            overlay={
              <Menu>
                <Menu.Item>中文</Menu.Item>
                <Menu.Item>英文</Menu.Item>
              </Menu>
            }
            icon={<GlobalOutlined />}
          >
            Language
          </Dropdown.Button>
          <Button.Group>
            <Button>登录</Button>
            <Button>注册</Button>
          </Button.Group>
        </div>
        <Layout.Header >
          <Typography.Title level={3}>React 旅游网</Typography.Title>
          <Input.Search placeholder="请输入"></Input.Search>
        </Layout.Header>
        <Menu mode={'horizontal'}>
          <Menu.Item key={1}>旅游首页1</Menu.Item>
          <Menu.Item key={2}>旅游首页2</Menu.Item>
          <Menu.Item key={3}>旅游首页3</Menu.Item>
          <Menu.Item key={4}>旅游首页4</Menu.Item>
        </Menu>
      </div>
  );
}

