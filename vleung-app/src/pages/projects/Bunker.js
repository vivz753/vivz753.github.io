import React from 'react';
import '../index.css'
import { Typography, Tag } from 'antd';
const { Title, Paragraph } = Typography;

export const Bunker = () => {

  return (
    <div>
      <Title>
        Bunker: A Hotel Booking Application
      </Title>
      <Paragraph>
        <Tag color="blue">React</Tag>
        <Tag color="geekblue">Visual Studio Code</Tag>
        <Tag color="cyan">Semantic UI React</Tag>
        <Tag color="red">Firebase</Tag>
      </Paragraph>
      <Paragraph>
      <span>
      Please minimize the sidebar for full experience. 
      <br>
      </br>
      Currently hosted at <a href="https://se-165.firebaseapp.com/">
       https://se-165.firebaseapp.com/
      </a>
      </span>
      </Paragraph>
      <iframe 
        title="bunker"
        width="100%" height="900px"
        frameBorder="1"
        src="https://se-165.firebaseapp.com/home"
      />
      <Paragraph>
        <span>
          Thanks to Jenil for great leadership and Prof. Anna Meng for great mentorship and my wonderful group team members
        </span>
      </Paragraph>
    </div>

  )
} 