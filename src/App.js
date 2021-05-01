import { useState } from 'react';
import './App.scss';

import PlayArea from './components/PlayArea';
import Header from './components/Header';

const cardIds = []

function App() {

  const [ amountOfCards, setAmountOfCards ] = useState(12);

  for(let i = 0; i < amountOfCards / 2; i ++) {
    cardIds.push(i);
    cardIds.push(i);
  }
  console.log(cardIds)

  return (
    <div className='app'>
      <Header />
      <PlayArea cardArray={cardIds} />
    </div>
  );
}

export default App;