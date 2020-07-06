import React from 'react';
import { useSelectedMenuItemValue } from '../context';
import { ProjectItems, AboutItems } from '../constants';
import { getProjectGroupOf } from '../helpers';


import { Layout, Menu } from 'antd';
const { Sider } = Layout;
const { SubMenu } = Menu;

export const MySider = () => {

  const {selectedMenuItem, selectedSiderGroup, setSelectedSiderGroup, selectedSiderItem, setSelectedSiderItem, setContentPage, siderCollapsed} = useSelectedMenuItemValue();

  let sideMenuItems = [];
  selectedMenuItem === 'PROJECTS' ? sideMenuItems = ProjectItems : sideMenuItems = AboutItems;

  // console.log(selectedMenuItem);
  // console.log(selectedSiderGroup);
  // console.log(selectedSiderItem);
  return (
    <Sider 
      collapsed={siderCollapsed}
      width={300} 
      style={{ background: '#fff' }}
    >
        <Menu
          mode="inline"
          defaultSelectedKeys={[selectedSiderItem]}
          //hard coded to open project submenus
          defaultOpenKeys={['WEBAPPS', '2D/3D']}
          selectedKeys={[selectedSiderItem]}
          style={{ height: '100%',  textAlign: 'left' }}
          onClick={({key}) => {
            selectedMenuItem === 'PROJECTS' && setSelectedSiderGroup(getProjectGroupOf(key).key); 
            setSelectedSiderItem(key);
            setContentPage(key);
          }}
        >
        {selectedMenuItem === 'PROJECTS' && sideMenuItems.map(item => {
          return (
            <SubMenu
              key={item.key}
              title={
                <span>
                  {/* <Icon type={item.icon} /> */}
                  <span>
                    {item.name}
                  </span>
                </span>
              }
              onTitleClick={({key}) => {
                setSelectedSiderGroup(key);
                setSelectedSiderItem('')
                console.log(item.key)
                // key !== selectedSiderGroup && setSelectedSiderItem('');
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

        {selectedMenuItem === 'ABOUT' && sideMenuItems.map(item => {
          return (
            <Menu.Item 
              key={item.key}
            >
               {/* <Icon type={item.icon} /> */}
               <span>
              {item.name}
               </span>
            </Menu.Item>
          )
        })

        }
        </Menu>
      </Sider>
  )
}