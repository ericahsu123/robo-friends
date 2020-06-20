import React, { useEffect } from 'react';

import CardList from './CardList';
import NavBar from './NavBar';
import Loading from './Loading';
import './styles.css';

const MainPage = (props) => {
  useEffect(() => {
    props.fetchRobots('https://jsonplaceholder.typicode.com/users');
    // eslint-disable-next-line
  }, []);

  const renderRobots = () => {
    if (props.robots.length === 0) {
      if (props.error) {
        return <h2>Error in fetching robots!</h2>;
      } else {
        return <Loading />;
      }
    } else {
      return <CardList />;
    }
  };
  return (
    <div className="ui container center aligned">
      <NavBar />
      <div style={{ marginTop: '120px' }}>{renderRobots()}</div>
    </div>
  );
};

export default MainPage;
