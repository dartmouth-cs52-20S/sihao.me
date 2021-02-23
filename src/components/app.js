import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
// import ReactDOM from 'react-dom';
import React from 'react';
import { NavContext, defaultNavContext } from '../shared/context';

// import $ from 'jquery';
import '../style.scss';
import Nav from './nav';
import Projects from './projects';
import Home from './home';
import About from './about';

// const Test = (props) => {
//   return <div> ID: {props.match.params.id} </div>;
// };
const FallBack = (props) => {
  return <div>URL Not Found</div>;
};
const App = (props) => {
  return (
    <NavContext.Provider value={defaultNavContext}>
      <Router>
        <Nav />
        <Switch>
          {/* without switch, all components are returned if the path matches */}
          <Route exact path="/" component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/about" component={About} />
          {/* <Route exact path="/test/:id" component={Test} /> */}
          <Route component={FallBack} />
        </Switch>
      </Router>
    </NavContext.Provider>
  );
};

export default App;
// ReactDOM.render(<App />, document.getElementById('main'));
