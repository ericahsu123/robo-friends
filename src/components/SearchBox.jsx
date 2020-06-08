import React from 'react';

const SearchBox = (props) => {
  const handleChange = (event) => {
    props.handleQuery(event.target.value);
  };
  return (
    <div className="ui top fixed huge stackable menu">
      <div className="item">
        <h1>RoboFriends</h1>
      </div>
      <div className="right item">
        <div className="ui icon input">
          <input
            type="text"
            placeholder="Search robots..."
            onChange={handleChange}
            value={props.query}
          />
          <i className="search icon"></i>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
