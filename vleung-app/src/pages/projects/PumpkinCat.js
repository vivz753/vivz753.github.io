import React from 'react';
import { Typography, Tag } from 'antd';
const { Title, Paragraph } = Typography;

export const PumpkinCat = () => {

  return (
    <div>
      <Title>
        Pumpkin Cat & the Skulls: A 2D Vintage Arcade Shooter
      </Title>
      <Paragraph>
        <Tag color="magenta">OpenFrameworks</Tag>
        <Tag color="blue">C++</Tag>
        <Tag color="purple">Visual Studio</Tag>
        <Tag color="blue">Adobe Photoshop</Tag>
      </Paragraph>
      <iframe 
      title="pumpkincat"
      width="100%" height="800px" 
      src="https://www.youtube.com/embed/yUKTGlYq0QY" 
      frameBorder="0" 
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
      allowFullScreen></iframe>
    </div>
  )
}