import React from 'react';
import './Overlays.scss'

function OverlayStart(props) {
  return (
    <div>
      <div className={`overlay ${props.gameStart ? "overlay-start" : ""}`}>
        <h1 className="overlay-start__welcome">Welcome to Space Memory!!!</h1>
        <p className="overlay-start__press-start">Press the play button below to start a new game</p>
        <button className="overlay-start__start-button btn">Start</button>
      </div>
      {console.log(props.gameStart)}
    </div>
  )
}



export default OverlayStart;