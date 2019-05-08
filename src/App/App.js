import React, { Component } from "react";
import axios from "axios";
import NavBar from "../Nav Bar/Nav Bar.js";
import Main from "../Main/Main.js";
import "./App.css";

let students;

class App extends Component {
  state = {
    currPage: localStorage.getItem("currPage")
  };

  retrieveStudents = () => {
    axios
      .get(`https://v4pq771b89.execute-api.us-west-2.amazonaws.com/dev/get`)
      .then(res => {
        students = res.data.message.rows;
        console.log(students, "retrieve student list")
        this.setState({
          students: students
        });
      });
  };

  componentDidMount = () => {
    this.retrieveStudents();
  };

  pageSwitchHandler = page => {
    localStorage.setItem("currPage", page);
    this.setState({
      currPage: localStorage.getItem("currPage")
    });
  };

  render() {
    return (
      <div className="App">
        <NavBar
          pageSwitchHandler={this.pageSwitchHandler}
          currPage={this.state.currPage}
        />
        <Main
          currPage={this.state.currPage}
          students={this.state.students}
          retrieveStudents={this.retrieveStudents}
          pageSwitchHandler={this.pageSwitchHandler}
        />
      </div>
    );
  }
}

export default App;
