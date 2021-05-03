import React from 'react';
import './Header.scss';

function Header(props) {
  return (
    <header className="header">
      <h1 className="header__main-heading">SPACE MEMORY</h1>
      <section className="header__info">
        <div className="header__info--time-left">
          <strong>Time: {props.timeLeft}</strong>
        </div>
        <div className="header__info--score">
          Score: {props.score}
        </div>
      </section>
    </header>
  )
}

export default Header;