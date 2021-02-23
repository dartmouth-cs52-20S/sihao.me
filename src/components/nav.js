import React, { useState, useContext } from 'react';
import {
  NavLink,
} from 'react-router-dom';
import styled from 'styled-components';
import github from '../img/github-150.png';
import { NavContext } from '../shared/context';

const activeClassName = 'nav-item-active';
const navItemMargin = 1.5;
const marginMap = ['0', '0', '4.5', '9.83', '16.1'];
const widthMap = ['0', '4.48', '5.35', '6.25', '5.34'];
const navAccentColor = '#00FF6A';
const navBackgroundColor = '#100d23';
// const navBackgroundColor = 'rgba(30, 29, 69, .6)';

const NavItem = styled.div.attrs(() => ({ className: 'highlightedText' }))`
  /* font-size: 1.5em; */
  /* margin: 0 ${navItemMargin}em 0 ${navItemMargin}em; */
  /* text-align: center; */
  color: palevioletred;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  /* padding-right: ${navItemMargin}em; */
  /* background-color: blue; */
  /* padding: ${navItemMargin}em; */

  &:hover{
    /* background-color: blue; */
  }

`;
const StyledLink = styled(NavLink).attrs({ activeClassName, className: 'highlighted' })`
  &{
    text-decoration: none;
    font-family: 'Roboto Condensed', sans-serif;
    color: ${`${navAccentColor}a0`};
    padding: ${navItemMargin}em;
    display: flex;
    align-items: center;
  }
  &.${activeClassName} {
    /* font-weight: bold; */
    background-color: ${navAccentColor};
    color: ${navBackgroundColor};
    /* text-decoration: none; */
  }
  &.highlighted:before
{
    /* position: absolute; */
    color: ${navAccentColor};
    /* top: 0px; */
    /* left: 0px; */
    /* padding: 10px; */
    margin-right: -${(props) => props.negmargin}em;
    overflow: hidden;
    content: attr(alt);
    transition: all 0.3s;
    /* transition: transform 0.5s, opacity 0.1s; */
    transform: scale(1.5);
    /* background-color: red; */
    opacity: 0;
} 

&.highlighted:hover:before {
  transform: scale(1);
  opacity: 1;
}

&.highlighted {
  /* color: ${navAccentColor}; */
  /* color: rgba(1, 255, 106, 0.8); */
  /* color: rgba(255, 255, 255, 0.4); */
}
&.${activeClassName}:hover:before {
    /* font-weight: bold; */
    opacity: 0
  }
`;

const Line = styled.div`
  position: absolute;
  right: 0;  
  background-color: ${navAccentColor};
  height: 4.5em;
  margin-right: ${(props) => marginMap[props.hover + 1]}em;
  width: ${(props) => widthMap[props.hover + 1]}em;
  transition: all 0.5s;
`;

const Img = styled.img`
  height: ${navItemMargin}em;
  width: ${navItemMargin}em;
  /* padding: 0, ${navItemMargin}em, 0, ${navItemMargin}em, ; */
  padding-left: ${navItemMargin}em;
  padding-right: ${navItemMargin}em;
`;

export default function Nav(props) {
  const [hover, setHover] = useState(-1);
  const navContext = useContext(NavContext);

  const setHoverOnEnter = (pos) => () => setHover(pos);
  const setHoverOnLeave = () => setHover(-1);
  const setNav = (screen) => () => { navContext.screen = screen; };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-left" />
        <div className="navbar-right">
          {/* <div><NavLink to="/">Home</StyledLink></div> */}
          <NavItem><StyledLink onClick={setNav(0)} onMouseLeave={setHoverOnLeave} onMouseEnter={setHoverOnEnter(3)} negmargin={2.34} alt="Home" to="/" exact>Home</StyledLink></NavItem>
          <NavItem><StyledLink onClick={setNav(1)} onMouseLeave={setHoverOnLeave} onMouseEnter={setHoverOnEnter(2)} negmargin={3.255} alt="Projects" to="/projects">Projects</StyledLink></NavItem>
          <NavItem><StyledLink onClick={setNav(2)} onMouseLeave={setHoverOnLeave} onMouseEnter={setHoverOnEnter(1)} negmargin={2.355} alt="About" to="/about">About</StyledLink></NavItem>
          <NavItem><a onMouseLeave={setHoverOnLeave} onMouseEnter={setHoverOnEnter(0)} href="https://github.com/sh51"> <Img src={github} alt="" /></a></NavItem>
        </div>
      </nav>
      <Line hover={hover} onClick={() => console.log(hover)} />
    </>
  );
}
