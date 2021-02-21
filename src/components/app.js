import {
  BrowserRouter as Router, Route, NavLink, Switch,
} from 'react-router-dom';
// import ReactDOM from 'react-dom';
import React from 'react';

import $ from 'jquery';
import '../style.scss';
import Counter from './counter';

$('#main').html('Let\'s get started!');

let secElapsed = 0;

setInterval(() => {
  secElapsed += 1;
  $('#subme').html(`You've been on this page for ${secElapsed} sec!`);
}, 1000);

const About = (props) => {
  return <div> All there is to know about me </div>;
};
const Welcome = (props) => {
  return <div>Welcome</div>;
};
const Test = (props) => {
  return <div> ID: {props.match.params.id} </div>;
};
const FallBack = (props) => {
  return <div>URL Not Found</div>;
};
const Nav = (props) => {
  return (
    <nav>
      <ul>
        {/* <li><NavLink to="/">Home</NavLink></li> */}
        <li><NavLink to="/" exact>Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/counter">counter</NavLink></li>
        <li><NavLink to="/test/id1">test id1</NavLink></li>
        <li><NavLink to="/test/id2">test id2077</NavLink></li>
        <li><NavLink to="/netherland">netherland</NavLink></li>
      </ul>
    </nav>
  );
};
const App = (props) => {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          {/* without switch, all components are returned if the path matches */}
          <Route exact path="/" component={Welcome} />
          <Route path="/about" component={About} />
          <Route path="/counter" component={Counter} />
          <Route exact path="/test/:id" component={Test} />
          <Route component={FallBack} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
// ReactDOM.render(<App />, document.getElementById('main'));
