"use client";
import React, { useState } from 'react';
import { Drawer, Menu, Space } from 'antd';


const DrawerMenu: React.FC = () => {
  const [open, setOpen] = useState(false);

  const onClose = () => {
    setOpen(false);
  };

  const menuItems = [
    {
      key: '1',
      label: 'Home',
    },
    {
      key: '2',
      label: 'About',
    },
    {
      key: '3',
      label: 'Contact',
    },
  ];

  return (
    <Space direction="vertical" size={12}>
      <button onClick={() => setOpen(true)}>Menu</button>
      <Drawer
        title="Menu"
        placement="left"
        onClose={onClose}
        open={open}
      >
        <Menu mode="inline" items={menuItems} />
      </Drawer>
    </Space>
  );
};

export default DrawerMenu;