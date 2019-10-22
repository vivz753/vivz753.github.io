import React from 'react';
import { Typography, Tag } from 'antd';
const { Title, Paragraph } = Typography;

export const Octree = () => {

  return (
    <div>
      <Title>
        Ray Tracing in 3D using an Octree
      </Title>
      <Paragraph>
        <Tag color="magenta">OpenFrameworks</Tag>
        <Tag color="blue">C++</Tag>
        <Tag color="purple">Visual Studio</Tag>
      </Paragraph>
      <iframe 
      title="octree"
      width="100%" height="800px" 
      src="https://www.youtube.com/embed/o47EnZuYJrQ" 
      frameBorder="0" 
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
      allowFullScreen>
      </iframe>
    </div>

  )
}