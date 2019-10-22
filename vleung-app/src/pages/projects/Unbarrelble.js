import React from 'react';
import { Typography, Tag } from 'antd';
const { Title, Paragraph } = Typography;

export const Unbarrelble = () => {
  return (
    <div>
      <Title>
        Unbarrelble: A 3D Simulation
      </Title>

      <Paragraph>
        <Tag color="magenta">OpenFrameworks</Tag>
        <Tag color="blue">C++</Tag>
        <Tag color="purple">Visual Studio</Tag>
        <Tag color="red">Maya</Tag>
      </Paragraph>
      <iframe 
      title="unbarrelble"
      width="100%" height="800px" 
      src="https://www.youtube.com/embed/1EQnre0qbFg" 
      frameBorder="0" 
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
      allowFullScreen></iframe>
    </div>
  )
}