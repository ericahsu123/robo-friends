import React from 'react';
import Card from './Card';

const CardList = (props) => {
  return (
    <div className="ui cards" style={{ marginTop: '150px' }}>
      {props.robots.map((robot) => {
        return <Card key={robot.id} name={robot.name} email={robot.email} />;
      })}
    </div>
  );
};

export default CardList;
