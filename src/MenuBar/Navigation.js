import React, { useState } from 'react';
import 'antd/dist/antd.css';
import './Navigation.css'
import { Menu } from 'antd';

import {
  AppstoreOutlined,
  DatabaseOutlined,
  TabletOutlined,
  ContainerOutlined,
  HddOutlined,
  BookOutlined,
  BorderlessTableOutlined,
  AuditOutlined,
  EyeOutlined
} from '@ant-design/icons';

const { SubMenu } = Menu;

function Navigation() {

  const [menu, setMenu] = useState();

  const printCurrentMenu = (item) => {
    setMenu(item);
    console.log(menu)
  }

  return (
    <div>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        onClick={(e) => printCurrentMenu(e)}
      >
        <SubMenu key="sub1" icon={<DatabaseOutlined />} title="Proizvodi">
          <Menu.Item icon={<DatabaseOutlined />} key="1">
            Proizvod
          </Menu.Item>
          <Menu.Item icon={<TabletOutlined />} key="2">
            Dio
          </Menu.Item>
          <Menu.Item icon={<HddOutlined />} key="3">
            Element
          </Menu.Item>
          <Menu.Item icon={<BookOutlined />} key="4">
            Komponenta
          </Menu.Item>
          <Menu.Item icon={<BorderlessTableOutlined />} key="5">
            Uloga dijela
          </Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Narudžbe">
          <Menu.Item icon={<AuditOutlined />} key="6">
            Nova narudžba
          </Menu.Item>
          <Menu.Item icon={<EyeOutlined />} key="7">
            Pregled
          </Menu.Item>
        </SubMenu>
        <Menu.Item key="8" icon={<ContainerOutlined />}>
          Dnevnik
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default Navigation;