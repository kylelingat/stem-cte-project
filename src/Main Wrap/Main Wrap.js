import React, { Component } from 'react';
import './Main Wrap.css'
import NavBar from '../Nav Bar/Nav Bar.js';
import Main from '../Main/Main.js'

export default class MainWrap extends Component {
    state = {
        currPage: 'home'
    };
  
    pageSwitchHandler = (page) => {
        this.setState({
            currPage: page
          });
    }

  render() {
    return (
      <div className="mainWrap">
      <NavBar pageSwitchHandler={this.pageSwitchHandler} />
      <Main currPage={this.state.currPage} />
      </div>
    );
  }
}


