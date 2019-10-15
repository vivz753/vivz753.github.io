import React from 'react';
import { useSelectedMenuItemValue } from '../context';
import { ProjectItems, AboutItems } from '../constants';


import { Layout, Menu, Icon } from 'antd';
const { Sider } = Layout;
const { SubMenu } = Menu;

export const MySider = () => {

  const {selectedMenuItem, selectedSiderGroup, setSelectedSiderGroup, selectedSiderItem, setSelectedSiderItem} = useSelectedMenuItemValue();

  let sideMenuItems = [];
  selectedMenuItem === 'PROJECTS' ? sideMenuItems = ProjectItems : sideMenuItems = AboutItems;


  return (
    <Sider width={300} style={{ background: '#fff' }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={[selectedSiderItem]}
          defaultOpenKeys={[selectedSiderGroup]}
          style={{ height: '100%' }}
          onClick={({key}) => {
            setSelectedSiderItem(key); 
            console.log('sidebar menu click: ' + key);
          }}
        >
        {sideMenuItems.map(item => {
          return (
            <SubMenu
              style={{ textAlign: 'left'}}
              key={item.key}
              title={
                <span>
                  <Icon type={item.icon} />
                  {item.name}
                </span>
              }
              onTitleClick={({key}) => {
                setSelectedSiderGroup(key);
                setSelectedSiderItem('');
                console.log('sidebar submenu click: ' + key)
              }}
            >
              {item.submenu.map(item => {
                return (
                  <Menu.Item key={item.key}>{item.name}</Menu.Item>
                )
              })}
            </SubMenu>

          )
        })}
        </Menu>
      </Sider>
  )
}