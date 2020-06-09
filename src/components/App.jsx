import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import CardList from './CardList';
import SearchBox from './SearchBox';
import Loading from './Loading';
import './styles.css';
import { fetchRobots } from '../actions';

const App = (props) => {
  useEffect(() => {
    props.fetchRobots();
    // eslint-disable-next-line
  }, []);
  // console.log('query', query);
  // console.log('robots', robots);

  return (
    <div className="ui container center aligned">
      <SearchBox />
      <div style={{ marginTop: '120px' }}>
        {props.robots.length === 0 ? <Loading /> : <CardList />}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { robots: state.robots };
};

export default connect(mapStateToProps, { fetchRobots })(App);
