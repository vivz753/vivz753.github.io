import React from 'react';
import { useSelectedMenuItemValue } from '../context';
import { ProjectItems, AboutItems } from '../constants';

import { Layout, Menu, Icon } from 'antd';
const { Sider } = Layout;
const { SubMenu } = Menu;

export const MySider = () => {

  const {selectedMenuItem} = useSelectedMenuItemValue();

  let sideMenuItems = [];
  selectedMenuItem === 'PROJECTS' ? sideMenuItems = ProjectItems : sideMenuItems = AboutItems;


  return (
    <Sider width={300} style={{ background: '#fff' }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={['PUMPKINCAT']}
          defaultOpenKeys={['2D/3D']}
          style={{ height: '100%' }}
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
            >
              {item.submenu.map(item => {
                return (
                  <Menu.Item key={item.key}>{item.name}</Menu.Item>
                )
              })}
            </SubMenu>

          )
        })}


          {/* <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="laptop" />
                Web Apps
              </span>
            }
          >
            <Menu.Item key="1">Todoist</Menu.Item>
            <Menu.Item key="2">Bunker</Menu.Item>
            <Menu.Item key="3">Port69 Portal</Menu.Item>
            <Menu.Item key="4">SJ EEW</Menu.Item>
          </SubMenu>

          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="picture" />
                2D/3D
              </span>
            }
          >
            <Menu.Item key="5">Pumpkin Cat & the Skulls</Menu.Item>
            <Menu.Item key="6">Octree Raytracing</Menu.Item>
            <Menu.Item key="7">Unbarrelble</Menu.Item>
          </SubMenu> */}
        </Menu>
      </Sider>
  )
}