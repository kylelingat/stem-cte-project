import React, { Component } from "react";
import "./Main.css";
import Home from "../Home/Home.js";
import Students from "../Students/Students.js";
import Behaviors from "../Behaviors/Behaviors.js";
import HorizontalNav from "../Nav Bar/Horizontal Nav.js";
import Section from "./Section.js";

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currSection: null
    };
  }

  sectionSwitchHandler = section => {
    this.setState({ currSection: section }, () => {
      console.log(this.state.currSection);
    });
  };

  render() {
    if (this.props.currPage === "home") {
      return (
        <div className="mainPageContainer">
          <HorizontalNav currPage={this.props.currPage} />
          <Section
            currPage={this.props.currPage}
            currSection={this.state.currSection}
          />
        </div>
      );
    } else if (this.props.currPage === "students") {
      return (
        <div className="mainPageContainer">
          <HorizontalNav
            currPage={this.props.currPage}
            secSwitch={this.sectionSwitchHandler}
          />
          <Section
            currPage={this.props.currPage}
            currSection={this.state.currSection}
          />
        </div>
      );
    } else if (this.props.currPage === "behaviors") {
      return (
        <div className="mainPageContainer">
          <HorizontalNav currPage={this.props.currPage} />
          <Section
            currPage={this.props.currPage}
            currSection={this.state.currSection}
          />
        </div>
      );
    }
    return null;
  }
}
