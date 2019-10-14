import React from 'react';
import Cube from '../Cube';
import { MySider } from './MySider';
import { getMenuTitle } from '../helpers';
import { useSelectedMenuItemValue } from '../context';
import { Layout, Breadcrumb, Icon } from 'antd';
const { Content } = Layout;


export const MyContent = () => {
  const {selectedMenuItem} = useSelectedMenuItemValue();
  console.log(selectedMenuItem)
  const title = getMenuTitle(selectedMenuItem);
  console.log(title);

  return (
    <Content style={{ padding: '0 50px' }}>
    <Breadcrumb style={{ margin: '16px 0' }}>
      <Breadcrumb.Item>{title}</Breadcrumb.Item>
      {/* <Breadcrumb.Item>{subtitle}</Breadcrumb.Item> */}
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