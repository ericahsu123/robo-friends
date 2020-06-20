import React from 'react';
import { connect } from 'react-redux';

import { fetchRobots } from '../actions';
import MainPage from './MainPage';

const App = (props) => {
  return <MainPage {...props} />;
};

const mapStateToProps = (state) => {
  return { robots: state.robots.robots, error: state.robots.error };
};

export default connect(mapStateToProps, { fetchRobots })(App);
