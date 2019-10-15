import React, {useRef,useLayoutEffect, useEffect, useState} from 'react';
import { useSelectedMenuItemValue } from '../context';
import Cube from '../pages/about/Cube';
import { Bio } from '../pages/about/Bio';
import { Layout } from 'antd';
const { Content } = Layout;


export const MyPages = () => {

  const { contentPage } = useSelectedMenuItemValue();

  // const targetRef = useRef();
  // const [dimensions, setDimensions] = useState(null);

  // const ref = useRef(null);

  // console.log(ref.current ? ref.current.offsetWidth : 0)
  // useEffect(() => {
  //   const width = ref.current ? ref.current.offsetWidth : 0;
  //   console.log('width', width);
  // }, [ref.current]);



  // // useLayoutEffect(() => {
  // //   if (targetRef.current) {

  // //     setDimensions({
  // //       width: targetRef.current.offsetWidth,
  // //       height: targetRef.current.offsetHeight
  // //     });
  // //   }
  // // }, []);

  // // console.log('dimensions')
  // // console.log(dimensions)

  return (
    <Content style={{ padding: '0 24px', minHeight: 280, width: 'calc(100% - 300px)' }}>
      {/* <div ref={ref}>Hello</div> */}
      {contentPage === 'CUBE' && <Cube />}

      {contentPage === 'BIO' && <Bio />}
      {contentPage === 'RESUME' && <div> i'm resume</div>}
      {contentPage === 'PUMPKINCAT' && <div>

      {/* <iframe src='https://www.youtube.com/embed/E7wJTI-1dvQ'
        frameBorder='0'
        allow='autoplay; encrypted-media'
        allowFullScreen
        title='video'
      /> */}
      <iframe width="70%" height="500px" 
      src="https://www.youtube.com/embed/J6qIzKxmW8Y" 
      frameborder="0" 
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen></iframe>
      </div>}
      {contentPage === 'OCTREE' && <div> i'm octree</div>}
      {contentPage === 'UNBARRELBLE' && <div> i'm unbarrelble</div>}
      {contentPage === 'TODOIST' && 
            <iframe width="80%" height="700px"
            frameBorder="0"
            src="https://vivz753.github.io/React"
            />
      }
      {contentPage === 'BUNKER' && 
      <iframe width="100%" height="700px"
      frameBorder="0"
      src="https://se-165.firebaseapp.com/home"
      />
      }
    </Content>
  )
}