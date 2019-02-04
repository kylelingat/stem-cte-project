import React, { Component } from "react";
import { TableHeader, TableBody } from "./Table.js";
import AddStudents from "./Add Students.js";
import "./Students.css";


var persistentArray = [];
var retrieveArray = localStorage.getItem("studentsArray");

export default class Students extends Component {
  state = {
    students: JSON.parse(retrieveArray)
  };

  removeStudents = index => {
    const { students } = this.state;
    var removedStudentsArr = JSON.parse(retrieveArray)
    removedStudentsArr.splice(index, 1)
    window.localStorage.setItem("studentsArray", JSON.stringify(removedStudentsArr));
    this.setState({
      students: students.filter((character, i) => {
        return i !== index;
      })
    });
  };

  handleSubmit = students => {
    persistentArray.push(students);
    window.localStorage.setItem("studentsArray", JSON.stringify(persistentArray));
    retrieveArray = localStorage.getItem("studentsArray");
    this.setState({ students: JSON.parse(retrieveArray) }, () => {
      console.log(persistentArray);
    });
  };

  render() {
    return (
      <div className="studentsContainer">
        <AddStudents
          handleSubmit={this.handleSubmit}
          saveState={this.saveState}
        />
        <div className="studentsTable">
          <table>
            <TableHeader />
            <TableBody
              students={this.state.students}
              removeStudents={this.removeStudents}
            />
          </table>
        </div>
      </div>
    );
  }
}