import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
          Perguntas e Respostas
          </p>
          <a>
            Thales Dias
          </a>
        </header>
      </div>
    );
  }
}

export default App;
