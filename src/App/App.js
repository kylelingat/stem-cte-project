import React, { Component } from 'react';
import './App.css';
import NavBar from '../Nav Bar/Nav Bar.js';
import Main from '../Main/Main.js'
import MainWrap from '../Main Wrap/Main Wrap.js'

class App extends Component {
  render() {
    return (
      <div className="App">
      <MainWrap />
      </div>
    );
  }
}

export default App;
