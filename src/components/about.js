import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Content from '../shared/components';
import Colors from '../shared/style';
import pic from '../img/pic.jpg';

const padding = 4;
const CContent = styled(Content)`
  padding: ${padding}em 0 0 ${padding}em;
  flex-direction: row;
  justify-content: center;
`;
const Img = styled.img`
  width: ${(props) => props.size.width / 4.5}px;
  height: ${(props) => props.size.width / 4.5}px;
  border-radius: ${(props) => props.size.width / 2}px;
  border-width: 2em;
  border-color: ${Colors.white};
  box-shadow: 2px 1.5px 2px rgba(1, 255, 106, 0.6);
  opacity: ${(props) => props.show};
  transition: opacity .5s;
`;
const Bio = styled.div`
  width: 38%;
  display:flex;
  flex-direction: column;
  margin-left: 5em;
  opacity: ${(props) => props.show};
  transition: all 0.5s;
`;
const Body = styled.p`
  color: ${Colors.fg};
  font-size: 16pt;
  margin-top: 0;
  font-family: 'Lato', sans-serif;
`;
const Random = styled(Body)`
  color: ${Colors.fg}20;
  font-size: 12pt;
`;

export default function About(props) {
  const [windowSize, setWindowSize] = useState({});
  const [show, setshow] = useState(0);
  useEffect(() => {
    // callback on window resize
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // show content
    setshow(1);
    // register listener
    window.addEventListener('resize', handleResize);

    // set initial window size
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <CContent>
      <Img show={show} size={windowSize} src={pic} alt="" />
      <Bio show={show}>
        <Body>
          Hello there! <br /><br />I&#39;m from Shenzhen, China and now live in Hanover. <br /><br />Excited to meet all the wonderful people at DALI and turn genius ideas into shiny products.
        </Body>
        <Random>#Random: imho avocados are way too overrated.</Random>
      </Bio>
    </CContent>
  );
}
