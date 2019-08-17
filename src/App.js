import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bulutsuzluk özlemi
        </p>
        <a
          className="App-link"
          href="https://www.youtube.com/watch?v=LDsZcYtyu-I"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dinle
        </a>
      </header>
    </div>
  );
}

export default App;
