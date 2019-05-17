import React, { Component } from "react";
import axios from "axios";
import NavBar from "../Nav Bar/Nav Bar.js";
import Main from "../Main/Main.js";
import "./App.css";

let students;

class App extends Component {
  state = {
    dataFetched: false,
    currPage: localStorage.getItem("currPage"),
    students: [],
    studentOptions: []
  };

  async componentDidMount() {
    this.retrieveStudents();
  };


  retrieveStudents = () => {
    axios
      .get(`https://v4pq771b89.execute-api.us-west-2.amazonaws.com/dev/get`)
      .then(res => {
        students = res.data.message.rows;
        console.log(students, "retrieve student list")
        this.setState({
          students: students
        }, function () {
          const studentOptions = this.state.students.map((student, index) => {
            return {
              value: student.student_id,
              label: `${student.last_name}, ${student.first_name} ${
                student.grade_level
              }`
            };
          });
          this.setState({
            studentOptions: studentOptions,
            dataFetched: true
          });
        });
      });
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
                studentOptions={this.state.studentOptions}
                students={this.state.students}
                retrieveStudents={this.retrieveStudents}
                pageSwitchHandler={this.pageSwitchHandler}
              /></div>
    );
  }
}

export default App;
