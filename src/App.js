import { useState } from 'react';
import './App.scss';

import PlayArea from './components/PlayArea';
import Header from './components/Header';

import OverlayStart from './components/overlays/OverlayStart';

// This array holds two of every number up to half of the value of the amountOfCards declared in state
const cardIds = []

// This is how many seconds the game starts with
let timeLeft = 99;

function App() {

  // State to manage whether the game has started or not
  const [ gameStart, setGameStart ] = useState(false);

  const [ amountOfCards, setAmountOfCards ] = useState(12);
  const [ score, setScore ] = useState(0);

  for(let i = 0; i < amountOfCards / 2; i ++) {
    cardIds.push(i);
    cardIds.push(i);
  }
  console.log(cardIds)

  return (
    <div className='app'>
      <OverlayStart gameStart={gameStart} />
      <Header timeLeft={timeLeft} score={score} />
      <PlayArea cardArray={cardIds} />
    </div>
  );
}

export default App;