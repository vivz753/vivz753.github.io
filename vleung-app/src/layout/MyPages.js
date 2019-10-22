import React, {useRef,useLayoutEffect, useEffect, useState} from 'react';
import '../pages/index.css'
import { useSelectedMenuItemValue } from '../context';
import Cube from '../pages/about/Cube';
import { Bio } from '../pages/about/Bio';
import { Bunker } from '../pages/projects/Bunker';
import { ToDoist } from '../pages/projects/ToDoist';
import { PumpkinCat } from '../pages/projects/PumpkinCat';
import { Octree } from '../pages/projects/Octree';
import { Resume } from '../pages/about/Resume';
import { Unbarrelble } from '../pages/projects/Unbarrelble';

import { Layout, Typography, Icon} from 'antd';
const { Content } = Layout;
const { Title } = Typography;



export const MyPages = () => {

  const { contentPage, siderCollapsed, setSiderCollapsed } = useSelectedMenuItemValue();

  const toggle = () => {
    setSiderCollapsed(!siderCollapsed)
  }


  return (
    <Content style={{ padding: '0 24px', minHeight: '300px', width: 'calc(100% - 300px)' }}>
      <div style={{ textAlign: 'left'}}>
        <Icon
          type={siderCollapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={toggle}
        />
      </div>
      
      {contentPage === 'BIO' && <Bio />}
      {contentPage === 'CUBE' && <Cube />}
      {contentPage === 'RESUME' && <Resume />}
      {contentPage === 'PUMPKINCAT' && <PumpkinCat />}
      {contentPage === 'OCTREE' && <Octree />}
      {contentPage === 'UNBARRELBLE' && <Unbarrelble />}
      {contentPage === 'TODOIST' && <ToDoist />}
      {contentPage === 'BUNKER' && <Bunker />}

    </Content>
  )
}