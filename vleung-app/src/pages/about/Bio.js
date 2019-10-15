import React from 'react';
import { Avatar, Row, Col, Typography, Icon } from 'antd';

const {Title, Paragraph, Text} = Typography;

export const Bio = () => {
  return (
    // <Row gutter={16}>
    //   <Col span={8}>
    //     <Row>
    //       <Avatar size={200} src={process.env.PUBLIC_URL + "images/profile.jpg"} />
    //     </Row>
    //     <Row>

    //     <Icon type="github" />
    //     <Icon type="linkedin" />
    //     </Row>
    //   </Col>
      
    //   <Col span={16} >
    //     <Title>
    //       Hi, I'm Vivian
    //     </Title>
    //     <Paragraph>
    //       I graduated from SJSU in 2019 with a B.S. in Software Engineering. I am a front-end developer, and am learning computer graphics on the side. I am passionate about diversity, design, animation and film. *insert some funny jokes and puns here*
    //     </Paragraph>

    //   </Col>
    // </Row>
    <div>

      <Avatar size={200} src={process.env.PUBLIC_URL + "images/profile.jpg"} />
        <Title>
        Hi, I'm Vivian
      </Title>
      <Paragraph>
        I graduated from SJSU in 2019 with a B.S. in Software Engineering. I am a front-end developer, and am learning computer graphics on the side. I am passionate about diversity, design, animation and film. *insert some funny jokes and puns here*
      </Paragraph>
       <Icon type="github" />
       <Icon type="linkedin" />
    </div>
  )
}