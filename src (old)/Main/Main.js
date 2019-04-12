import React, { Component } from "react";
import "./Main.css";
import Home from "../Home/Home.js";
import Students from "../Students/Students.js";
import Behaviors from "../Behaviors/Behaviors.js";
import HorizontalNav from "../Nav Bar/Horizontal Nav.js";
import Section from "./Section.js";
import axios from "axios";

let students;

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currHomeSection: null,
      currStudentSection: 'database',
      currBehaviorSection: null,
      students: null
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

  componentDidMount = () => {
    this.retrieveStudents();
  };

  retrieveStudents = () => {
    axios
      .get(`https://v4pq771b89.execute-api.us-west-2.amazonaws.com/dev/get`)
      .then(res => {
        students = res.data.message.rows;
        this.setState({
          students: students
        });
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
            retrieveStudents={this.retrieveStudents}
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
