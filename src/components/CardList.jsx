import React from 'react';
import { connect } from 'react-redux';

import Card from './Card';
import filterArrayOfObjects from './utils/filterArrayOfObjects';

const CardList = (props) => {
  const searchRobots = filterArrayOfObjects(props.robots, 'name', props.query);

  return (
    <div className="ui cards">
      {searchRobots.map((robot) => {
        return <Card key={robot.id} name={robot.name} email={robot.email} />;
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { robots: state.robots.robots, query: state.query };
};

export default connect(mapStateToProps)(CardList);
