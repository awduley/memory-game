import React from 'react';
import './PlayArea.scss';

import Card from './Card';

function PlayArea(props) {

  console.log(props.cardArray)

  let counter = 0;

  return (
    <main className="play-area">
      {
        props.cardArray.map((card, idx) => {
          counter ++;
          return <Card key={idx + counter} cardArray={props.cardArray[card]} />
        })
      }
    </main>
  )
}

export default PlayArea