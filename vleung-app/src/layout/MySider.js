import React from 'react';
import { useSelectedMenuItemValue } from '../context';
import { ProjectItems, AboutItems } from '../constants';
import { getProjectGroupOf } from '../helpers';


import { Layout, Menu, Icon } from 'antd';
const { Sider } = Layout;
const { SubMenu } = Menu;

export const MySider = () => {

  const {selectedMenuItem, selectedSiderGroup, setSelectedSiderGroup, selectedSiderItem, setSelectedSiderItem, setContentPage} = useSelectedMenuItemValue();

  let sideMenuItems = [];
  selectedMenuItem === 'PROJECTS' ? sideMenuItems = ProjectItems : sideMenuItems = AboutItems;

  console.log(selectedMenuItem);
  console.log(selectedSiderGroup);
  console.log(selectedSiderItem);
  return (
    <Sider width={300} style={{ background: '#fff' }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={[selectedSiderItem]}
          defaultOpenKeys={[selectedSiderGroup]}
          selectedKeys={[selectedSiderItem, ]}
          style={{ height: '100%',  textAlign: 'left' }}
          onClick={({key}) => {
            setSelectedSiderItem(key);
            selectedMenuItem === 'PROJECTS' && setSelectedSiderGroup(getProjectGroupOf(key).key); 
            setContentPage(key);
          }}
        >
        {selectedMenuItem === 'PROJECTS' && sideMenuItems.map(item => {
          return (
            <SubMenu
              key={item.key}
              title={
                <span>
                  <Icon type={item.icon} />
                  {item.name}
                </span>
              }
              onTitleClick={({key}) => {
                setSelectedSiderGroup(key);
                setSelectedSiderItem('')
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
               <Icon type={item.icon} />
              {item.name}
            </Menu.Item>
          )
        })

        }
        </Menu>
      </Sider>
  )
}