import React, { Component } from 'react';
import './App.css';
import NavBar from '../Nav Bar/Nav Bar.js';
import Main from '../Main/Main.js'

class App extends Component {
  render() {
    return (
      <div className="App">
      <NavBar />
      <Main />
      </div>
    );
  }
}

export default App;
