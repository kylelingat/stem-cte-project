import React, { Component } from 'react';
import './Main.css'

export default class Main extends Component {
    render(){
        return (
            <div className="mainContainer">
            {this.props.currPage === "home" ? "home" : null }
            {this.props.currPage === "students" ? "students" : null }
            {this.props.currPage === "behaviors" ? "behaviors" : null }
            </div>
        )
    }
}