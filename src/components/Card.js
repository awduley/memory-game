import React from 'react';
import './Card.scss';

function Card(props) {
  console.log(props.cardArray)
  return (
  <div className="card">
    <div className="card__container">
      <div className="card__container--front">
        <img className="card__container--img" src={`https://robohash.org/${props.cardArray}`} alt="Random robot" />
      </div>
      <div className="card__container--back">
      </div>
    </div>
  </div>
  )
}

export default Card;