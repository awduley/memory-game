import { useState } from 'react';
import './App.scss';
import PlayArea from './components/PlayArea';

const cardIds = []

function App() {

  const [ amountOfCards, setAmountOfCards ] = useState(6);

  for(let i = 0; i < amountOfCards / 2; i ++) {
    cardIds.push(i);
    cardIds.push(i);
  }
  console.log(cardIds)

  return (
    <div className='app'>
      <PlayArea cardArray={cardIds} />
    </div>
  );
}

export default App;