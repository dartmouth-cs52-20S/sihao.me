/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1];
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;
const cardWidth = 15;
const Card = styled(animated.div)`
  width: ${cardWidth}em;
  height: ${cardWidth}em;
  background: white;
  border-radius: 1em;
  /* background-image: url('https://drscdn.500px.org/photo/435236/q%3D80_m%3D1500/v2?webp=true&sig=67031bdff6f582f3e027311e2074be452203ab637c0bd21d89128844becf8e40');
  background-size: cover;
  background-position: center center; */
  /* box-shadow: 0px 5px 15px -2px ${(props) => (props.shadowcolor ? `${props.shadowcolor}4c` : 'rgba(1, 255, 106, 0.3)')}; */
  transition: box-shadow 0.5s;
  will-change: transform;
  border: 15px solid white;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
  /* box-shadow: 0px 5px 50px -5px ${(props) => (props.shadowcolor ? `${props.shadowcolor}80` : 'rgba(1, 255, 106, 0.5)')}; */
}
`;
const Img = styled.img`
  height: ${0.8 * cardWidth};
  width: ${0.8 * cardWidth}em;
`;

function Tile(propsFromParent) {
  const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }));
  return (
    <Card
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseEnter={() => propsFromParent.superOnMouseEnter()}
      onMouseLeave={() => {
        set({ xys: [0, 0, 1] });
        propsFromParent.superOnMouseLeave();
      }}
      style={{ transform: props.xys.interpolate(trans) }}
    >
      <Img src={propsFromParent.imgsrc} alt="" />
    </Card>
  );
}

export default Tile;
