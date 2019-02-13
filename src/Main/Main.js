import React, { Component } from "react";
import "./Main.css";
import Home from '../Home/Home.js';
import Students from '../Students/Students.js';
import Behaviors from '../Behaviors/Behaviors.js';
import DbTest from '../db-test/db.js';


export default class Main extends Component {

  render() {
      if(this.props.currPage === 'home'){
          return <Home  />   
      } else if (this.props.currPage === 'students'){
        return <Students />
      } else if (this.props.currPage === 'behaviors'){
        return <Behaviors />
      } else if (this.props.currPage === 'db-test'){
        return <DbTest />
      }
    return null
    
  }
}

