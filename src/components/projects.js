import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Tile from './tile';
import wd from '../img/wd-logo.png';
import Content from '../shared/components';
import Colors from '../shared/style';

const padding = 4;
const CContent = styled(Content)`
  padding: ${padding}em 0 0 ${padding}em;
  flex-direction: row;
`;

const Panel = styled.div`
  display: flex;
  flex-direction: row;
  opacity: ${(props) => props.load};
  transform: translateY(${(props) => (props.load ? 0 : 10)}em);
  transition: all .5s;
`;
const Caption = styled.h1`
  color: ${Colors.white};
  /* background-color: lightcoral; */
  text-align: center;
  font-size: 32pt;
  font-family: 'Raleway', sans-serif;
  margin-top: 1.5em;
  opacity: ${(props) => (props.show ? 1 : 0)};
  transform: translateX(${(props) => (props.show ? 0 : -10)}em);
  transition: all 0.5s;
`;
const Discription = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: ${padding}em;
  opacity: ${(props) => (props.show ? 1 : 0)};
  transform: translateX(${(props) => (props.show ? 0 : 10)}em);
  margin-top: -1em;
  transition: all 0.5s;
`;
const Bullet = styled.p`
  color: ${Colors.white};
  font-size: 16pt;
  font-family: 'Lato', sans-serif;
`;
const More = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 9em;
  transition: all 0.5s;
  transform: translateX(${(props) => (props.show ? 4 : -10)}em);
  &:before {
    color: ${Colors.fg};
    margin-right: 1em;
    overflow: hidden;
    content: attr(alt);
    transition: all 0.3s;
    /* transition: transform 0.5s, opacity 0.1s; */
    transform: scale(1.5);
    opacity: 0;
} 
&:hover:before {
    opacity: 1;
} 
`;
const Dot = styled.div`
  background-color: ${Colors.fg};
  width: 1em;
  height: 1em;
  border-radius: 10em;
  margin-left: 0.5em;
`;
const wdLists = ['Democratize event planning', 'Organize spontaneity', 'Be Your Authentic Self', 'Share Your Passions', 'Reclaiming Your Time.'];

export default function Projects(props) {
  const [show, setShow] = useState(false);
  // // another typing effect
  // let interval;
  // let i = 0;
  // const str = 'TO BE CONTINUED';
  // const [text, settext] = useState('');
  // const toggleText = () => {
  //   console.log('Clicked');
  //   if (text.length === 0) {
  //     i += 1;
  //     interval = setInterval(() => {
  //       settext(str.substring(0, i));
  //       if (i === str.length) clearInterval(interval);
  //     }, 500);
  //   }
  // };
  const [load, setload] = useState(0);
  useEffect(() => {
    setload(1);
  }, []);
  return (
    <CContent>
      <Panel load={load}>
        <div style={{ display: 'flex', flexDirection: 'column', paddingTop: '1.5em' }}>
          <a target="_blank" rel="noreferrer" href="https://apps.apple.com/us/app/whos-down/id1527341310">
            <Tile shadowcolor="#ffffff" imgsrc={wd} superOnMouseEnter={() => setShow(true)} superOnMouseLeave={() => setShow(false)} />
          </a>
          <Caption show={show}>Who{'\''}s down?</Caption>
        </div>
        <Discription show={show}>
          {wdLists.map((elem) => <Bullet key={elem}>{elem}</Bullet>)}
        </Discription>

      </Panel>
      <Panel load={load}>
        <More show={show}>
          <Dot />
          <Dot />
          <Dot />
        </More>
      </Panel>
    </CContent>
  );
}
