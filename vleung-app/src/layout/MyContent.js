import React from 'react';
import Cube from '../Cube';
import { MySider } from './MySider';
import { getMenuName, getProjectName, getAboutItemName } from '../helpers';
import { useSelectedMenuItemValue } from '../context';
import { Layout, Breadcrumb, Icon } from 'antd';
const { Content } = Layout;


export const MyContent = () => {
  const {selectedMenuItem, selectedSiderGroup, selectedSiderItem} = useSelectedMenuItemValue();
  
  const menuName = getMenuName(selectedMenuItem);

  let siderGroupName, siderItemName = '';

  selectedMenuItem === 'PROJECTS' ? 
  [ siderGroupName, siderItemName ] = getProjectName(selectedSiderGroup, selectedSiderItem) : 
  siderItemName = getAboutItemName(selectedSiderItem);
  
  return (
    <Content style={{ padding: '0 50px' }}>
    <Breadcrumb style={{ margin: '16px 0' }}>
      {menuName && (<Breadcrumb.Item>{menuName}</Breadcrumb.Item>)}
      {siderGroupName &&  <Breadcrumb.Item>{siderGroupName}</Breadcrumb.Item>}
      {siderItemName  && <Breadcrumb.Item>{siderItemName}</Breadcrumb.Item>}
    </Breadcrumb>

    <Layout style={{ padding: '24px 0', background: '#fff' }}>
      <MySider />
      
      <Content style={{ padding: '0 24px', minHeight: 280 }}>
        <Cube />
      </Content>
    </Layout>
  </Content>
  )
}