import React from 'react';
import '../index.css'
import { Avatar, Row, Col, Typography, Icon } from 'antd';

const {Title, Paragraph, Text} = Typography;

export const Bio = () => {
  return (
    <Row gutter={24}>
      <Col span={8}>
        <Row>
          <Avatar size={200} src={process.env.PUBLIC_URL + "images/profile.jpg"} />
        </Row>
        <Row>
          <a href="https://github.com/vivz753">
            <Icon 
            className="bio-icon"
            type="github" />
          </a>
          <a href="https://www.linkedin.com/in/vivz753">
            <Icon 
            className="bio-icon"
            type="linkedin" />
          </a>
        </Row>
      </Col>
      
      <Col span={14} >
        <Title>
          Hi, I'm Vivian
        </Title>
        <Paragraph>
          I graduated from SJSU in 2019 with a B.S. in Software Engineering. I am a front-end developer, and am learning computer graphics on the side. 
          {/* I am passionate about diversity and design. *insert some funny jokes and puns here* */}
        </Paragraph>

      </Col>
    </Row>
    // <div>

    //   <Avatar size={200} src={process.env.PUBLIC_URL + "images/profile.jpg"} />
    //     <Title>
    //     Hi, I'm Vivian
    //   </Title>
    //   <Paragraph>
    //     I graduated from SJSU in 2019 with a B.S. in Software Engineering. I am a front-end developer, and am learning computer graphics on the side. I am passionate about diversity, design, animation and film. *insert some funny jokes and puns here*
    //   </Paragraph>
    //   <a href="https://github.com/vivz753">
    //    <Icon type="github" />
    //   </a>
    //   <a href="https://www.linkedin.com/in/vivz753">
    //    <Icon width={50} type="linkedin" />
    //   </a>
    // </div>
  )
}