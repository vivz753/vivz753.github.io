import React from 'react';
import { Row, Typography } from 'antd';
const { Paragraph } = Typography;

export const ToDoist = () => {

  return (
    <Row>
      <Paragraph>
        <span>
        Please minimize sidebar for full experience.
        Currently hosted at 
       <br></br>
        <a href="https://vivz753.github.io/React">
          https://vivz753.github.io/React
        </a>
        </span>
      </Paragraph>
      <Row>

      <iframe 
        title="todoist"
        width="100%" height="700px"
        frameBorder="1"
        src="https://vivz753.github.io/React"
      />

      </Row>
      <Paragraph>
        <span>
          Built using React and Firebase following this tutorial
          <br>
          </br>
          <a href = "https://www.youtube.com/watch?v=hT3j87FMR6M"> 
            https://www.youtube.com/watch?v=hT3j87FMR6M
          </a>
        </span>
      </Paragraph>
    </Row>
  )
}