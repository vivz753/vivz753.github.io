import React, {useRef,useLayoutEffect, useEffect, useState} from 'react';
import '../pages/index.css'
import { useSelectedMenuItemValue } from '../context';
import Cube from '../pages/about/Cube';
import { Bio } from '../pages/about/Bio';
import { Bunker } from '../pages/projects/Bunker';
import { ToDoist } from '../pages/projects/ToDoist';
import { PumpkinCat } from '../pages/projects/PumpkinCat';
import { Octree } from '../pages/projects/Octree';

import { Layout, Typography, Icon} from 'antd';
const { Content, Header } = Layout;
const { Title } = Typography;



export const MyPages = () => {

  const { contentPage, siderCollapsed, setSiderCollapsed } = useSelectedMenuItemValue();

  const toggle = () => {
    setSiderCollapsed(!siderCollapsed)
  }


  return (
    <Content style={{ padding: '0 24px', minHeight: '600px', width: 'calc(100% - 300px)' }}>
      <div style={{ textAlign: 'left'}}>
        <Icon
          type={siderCollapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={toggle}
        />
      </div>
      {contentPage !== "BIO" &&
        <Title level={2}>
          {contentPage}
        </Title>
      }

      {contentPage === 'CUBE' && <Cube />}

      {contentPage === 'BIO' && <Bio />}
      {contentPage === 'RESUME' && <div> i'm resume</div>}
      {contentPage === 'PUMPKINCAT' && <PumpkinCat />}
      {contentPage === 'OCTREE' && <Octree />}
      {contentPage === 'UNBARRELBLE' && <div> i'm unbarrelble</div>}
      {contentPage === 'TODOIST' && <ToDoist />}
      {contentPage === 'BUNKER' && <Bunker />}
    </Content>
  )
}