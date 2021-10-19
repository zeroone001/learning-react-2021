import React from 'react';
import { Layout, Typography, Input, Dropdown, Menu, Button } from 'antd';
import { GlobalOutlined } from "@ant-design/icons"
import styles from './footer.module.css';

export const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
        <Layout.Footer>
          <Typography.Title level={3}>
            版权所有@旅游网
          </Typography.Title>
        </Layout.Footer>
      </div>
  );
}

