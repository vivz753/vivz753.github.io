import React, {useState} from 'react';
import { MyContent } from './MyContent';
import { MenuItems } from '../constants';
import { useSelectedMenuItemValue } from '../context';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

export const MyLayout = () => {

const { SubMenu } = Menu;
const {selectedMenuItem, setSelectedMenuItem, setSelectedSiderGroup, setSelectedSiderItem} = useSelectedMenuItemValue();

return (
<Layout>
    <Header className="header">
      <div className="logo" />
      <Menu
        mode="horizontal"
        defaultSelectedKeys={[selectedMenuItem]}
        style={{ lineHeight: '64px' }}
        onClick={({key}) => {
          // don't delete breadcrumbs if nav item hasn't changed
          key !== selectedMenuItem && setSelectedMenuItem(key);
          key !== selectedMenuItem && setSelectedSiderGroup('');
          key !== selectedMenuItem && setSelectedSiderItem('');
        }}
      >
        {MenuItems.map(item => {
          return (
            <Menu.Item key={item.key}>
              {item.name}
            </Menu.Item>
          )
        })}
      </Menu>
    </Header>

    <MyContent/>

    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>

)

}
