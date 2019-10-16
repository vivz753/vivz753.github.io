import React from 'react';
import { Row, Typography } from 'antd';
const { Paragraph } = Typography;

export const ToDoist = () => {

  return (
    <Row>
      <Paragraph>
        <span>
          
      Please minimize sidebar for full experience.
 
       Currently hosted at <br></br>
      <a href="https://vivz753.github.io/React">
        https://vivz753.github.io/React
      </a>
        </span>
      </Paragraph>
      <iframe 
        title="todoist"
        width="80%" height="700px"
        frameBorder="0"
        src="https://vivz753.github.io/React"
      />
    </Row>
  )
}