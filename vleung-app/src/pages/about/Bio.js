import React from 'react';
import '../index.css'
import { Avatar, Row, Col, Typography, Icon, Space } from 'antd';
import { LinkedinOutlined, GithubOutlined } from '@ant-design/icons'

const {Title, Paragraph, Text} = Typography;


export const Bio = () => {
  return (
    <Row gutter={24}>
      <Space direction="vertical">
      <Col span={14} offset={3}>
        <Row>
          <Avatar size={200} src={process.env.PUBLIC_URL + "images/profile.jpg"} />
        </Row>
        <Row>
          <a href="https://github.com/vivz753">
            <GithubOutlined 
            className="bio-icon"/>
          </a>
          <a href="https://www.linkedin.com/in/vivz753">
            <LinkedinOutlined
            className="bio-icon"/>
          </a>
        </Row>
      {/* </Col> */}
      
      {/* <Col span={14} > */}

        <Title>
          Hi, I'm Vivian
        </Title>
        <Paragraph>
          I graduated from SJSU in 2019 with a B.S. in Software Engineering and am seeking opportunities involving video games/animation. 
          {/* I am passionate about diversity and design. *insert some funny jokes and puns here* */}
        </Paragraph>

      </Col>
      </Space>
    </Row>
  )
}
