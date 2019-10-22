import React from 'react';
import { Tag, Typography } from 'antd';
const { Title, Paragraph } = Typography;

export const ToDoist = () => {

  return (
    <div>
      <Title>
        ToDoist: A Checklist App
      </Title>
      <Paragraph>
        <Tag color="blue">React</Tag>
        <Tag color="geekblue">Visual Studio Code</Tag>
        <Tag color="red">Firebase</Tag>
      </Paragraph>
      <Paragraph>
        <span>
          Please minimize sidebar for full experience.
          <br>
          </br>
          Currently hosted at <a href="https://vivz753.github.io/React">
            https://vivz753.github.io/React
          </a>
        </span>
      </Paragraph>

      <iframe 
        title="todoist"
        width="100%" height="700px"
        frameBorder="1"
        src="https://vivz753.github.io/React"
      />

      <Paragraph>
        <span>
          Thanks to <a href="https://freecodecamp.org"> freeCodeCamp </a>
          for an awesome <a href = "https://www.youtube.com/watch?v=hT3j87FMR6M"> 
            tutorial
          </a>
        </span>
      </Paragraph>
    </div>
  )
}