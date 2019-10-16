import React from 'react';
import '../index.css'
import { Typography } from 'antd';
const {Paragraph} = Typography;

export const Bunker = () => {

  return (
    <div>
      <Paragraph>
      <span>
      
      Please minimize the sidebar for full experience. Currently hosted at <br>
      </br>
      <a href="https://se-165.firebaseapp.com/">
      https://se-165.firebaseapp.com/
      </a>
      </span>

      </Paragraph>
      <iframe 
        title="bunker"
        width="100%" height="600px"
        frameBorder="1"
        src="https://se-165.firebaseapp.com/home"
      />
    <Paragraph>      
      <span>
        A Hotel Booking App made with React and Firebase. My role in a team of 10 was the UI/UX designer, code reviewer, and front-end developer.
      </span>
    </Paragraph>
    </div>

  )
} 