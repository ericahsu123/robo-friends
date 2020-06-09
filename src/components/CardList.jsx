import React from 'react';
import { connect } from 'react-redux';

import Card from './Card';

const CardList = (props) => {
  const searchRobots = props.robots.filter((robot) => {
    return robot.name.toLowerCase().includes(props.query.toLowerCase());
  });

  return (
    <div className="ui cards">
      {searchRobots.map((robot) => {
        return <Card key={robot.id} name={robot.name} email={robot.email} />;
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { robots: state.robots, query: state.query };
};

export default connect(mapStateToProps)(CardList);
