import React from 'react';

const Card = (props) => {
  return (
    <div className="ui centered card">
      <div className="image">
        <img
          src={`https://robohash.org/${props.name}.png?bgset=bg1 `}
          alt="robot"
          style={{ backgroundColor: 'rgb(185, 226, 224)' }}
        />
      </div>
      <div className="content">
        <div className="center aligned header">{props.name}</div>
        <div className="center aligned description">{props.email}</div>
      </div>
    </div>
  );
};

export default Card;
