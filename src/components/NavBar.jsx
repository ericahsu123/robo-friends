import React from 'react';
import Heading from './Heading';
import SearchBox from './SearchBox';

const NavBar = () => {
  return (
    <div className="ui top fixed huge stackable menu">
      <Heading />
      <SearchBox />
    </div>
  );
};

export default NavBar;
