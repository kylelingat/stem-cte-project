import React, { Component } from "react";
import { TableHeader, TableBody } from "./Table.js";
import AddStudents from "./Add Students.js";
import "./Students.css";

// window.localStorage.setItem("studentsArray", JSON.stringify(persistentArray));
// var retrieveArray = localStorage.getItem("studentsArray");
// localStorage.setItem("hasStudentArray", false);

export default class Students extends Component {
  state = {
    students: JSON.parse(localStorage.getItem('studentArray') || "[]"),
    hasArray: localStorage.getItem("hasStudentArray")
  };

  removeStudents = index => {
    var retrieveStudArr = JSON.parse(localStorage.getItem("studentArray"))
    retrieveStudArr.splice(index, 1)
    console.log(retrieveStudArr)
    localStorage.setItem('studentArray', JSON.stringify(retrieveStudArr));
    
    
    
    const { students } = this.state;
    this.setState({                                       //client side removal
      students: students.filter((character, i) => { 
        return i !== index;
      })
    });
  };

  
  handleSubmit = students => {
    var studentArray = JSON.parse(localStorage.getItem('studentArray') || "[]");

    studentArray.push(students);
    localStorage.setItem('studentArray', JSON.stringify(studentArray));
    this.setState({students: JSON.parse(localStorage.getItem('studentArray') || "[]")})

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