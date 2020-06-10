import React from 'react';
import { connect } from 'react-redux';

import { changeSearchString } from '../actions';

const SearchBox = (props) => {
  const handleChange = (event) => {
    props.changeSearchString(event.target.value);
  };
  return (
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
  );
};

const mapStateToProps = (state) => {
  return {
    query: state.query,
  };
};

export default connect(mapStateToProps, { changeSearchString })(SearchBox);
