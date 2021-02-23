import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import Colors from '../shared/style';
import Content from '../shared/components';

const shiftleft = 8;
const typeInterval = 100;
const blink = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;
const Blinker = styled.i`
// position: absolute;
  width: 5px;
  height: 0.8em;
  // align-self: flex-end;
  margin-bottom: 2px;
  margin-left: 4px;
  background-color: ${Colors.fg};
  // left: 5px;
  // top: 10%;
  animation-name: ${blink};
  animation-duration: 1000ms;
  animation-iteration-count: infinite;
  opacity: 1;
`;
const H2 = styled.h1`;
  color: ${Colors.white};
  font-family: "Lato", sans-serif;
  font-size: 48pt;
  margin: 0;
  padding-right: ${shiftleft - 1.5}em;
  opacity: ${(props) => props.show};
  transition: all 1s;
  transition-delay: ${typeInterval}ms;
  /* text-align: center; */
`;
const H1 = styled.h1`
  color: ${Colors.white};
  font-family: "Raleway", sans-serif;
  font-weight: 700;
  font-size: 96pt;
  margin: 0;
  display: flex;
  align-items: center;
  margin-top: 0.2em;
`;
const H3 = styled.h1`
  color: ${Colors.white}80;
  font-family: "Lato", sans-serif;
  font-weight: 200;
  font-size: 32pt;
  margin: 0;
  margin-bottom: 1em;
  margin-top: 0.2em;
  padding-right: ${shiftleft}em;
  transition: all 1s;
  transition-delay: 0.5s;
  opacity: ${(props) => props.show};
  
`;
const CenteredContent = styled(Content)`
  justify-content: center;
  align-items: center;
`;

export default function Home(props) {
  const [show, setShow] = useState(0);
  const [text, setText] = useState('');

  const str = 'Sihao Huang.';
  let interval;
  useEffect(() => {
    let i = 1;
    setShow(1);
    interval = setInterval(() => {
      setText(str.substr(0, i));
      i += 1;
      if (i === str.length + 1) clearInterval(interval);
    }, typeInterval);

    return () => clearInterval(interval);
  }, []);
  return (
    <CenteredContent>
      <H2 show={show}>
        Welcome! I{'\''}m
      </H2>
      <H1>
        {text}
        <Blinker />
      </H1>
      <H3 show={show}>
        Web & Mobile Developer
      </H3>
    </CenteredContent>
  );
}
