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
      currHomeSection: null,
      currStudentSection: 'addStudents',
      currBehaviorSection: null
    };
  }

  homeSecHandler = section => {
    this.setState({ currHomeSection: section }, () => {
      console.log(this.state.currHomeSection);
    });
  };

  studSecHandler = section => {
    this.setState({ currStudentSection: section }, () => {
      console.log(this.state.currStudentSection);
    });
  };

  behaviorSecHandler = section => {
    this.setState({ currBehaviorSection: section }, () => {
      console.log(this.state.currBehaviorSection);
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
            currStudentSection={this.state.currStudentSection}
            secSwitch={this.studSecHandler}
          />
          <Section
            currPage={this.props.currPage}
            currStudentSection={this.state.currStudentSection}
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
