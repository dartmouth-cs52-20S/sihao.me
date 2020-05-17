import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Controls from './controls';

// this can be dumb or smart component - connect works with either
const Counter = (props) => {
  return (
    <div>
      <div>
        Current Count: {props.count}
      </div>
      <Controls />
    </div>
  );
};

// connects particular parts of redux state to this components props
const mapStateToProps = (state) => (
  {
    count: state.count,
  }
);

// react-redux glue -- outputs Container that know state in props
// also with an optional HOC withRouter
export default withRouter(connect(mapStateToProps, null)(Counter));
