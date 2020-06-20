import React, { useState } from 'react';

const Card = (props) => {
  const [likesCount, setLikesCount] = useState(0);

  const onIncrementLikes = () => {
    setLikesCount((prevLikesCount) => {
      if (prevLikesCount < 5) {
        return prevLikesCount + 1;
      }
      return prevLikesCount;
    });
  };
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
        <span className="right floated">
          <i
            className="star outline like icon"
            onClick={onIncrementLikes}
            data-testid="add-count"
          ></i>
          <span data-testid="likes-count">{likesCount}</span>
          <span> </span>
          <span>stars</span>
        </span>
      </div>
    </div>
  );
};

export default Card;
