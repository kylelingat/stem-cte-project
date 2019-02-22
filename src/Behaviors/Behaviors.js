import React, { Component } from "react";
import Select from "react-select";
import axios from "axios";
import Modal from "react-modal";
import "./Behaviors.css";
Modal.setAppElement("#root");
var students = [];

const studentStyleBg = (base, state) => {
  let changes = {
    backgroundColor: 'var(--inputBg-color)'
  };
  return Object.assign(base, changes);
};

const controlStyles = (base, state) => {
    let changes = {
      border: '0px solid transparent',
      ...base,
      border: state.isFocused ? 0 : 0,
      // This line disable the blue border
      boxShadow: state.isFocused ? 0 : 0,
      '&:hover': {
         border: state.isFocused ? 0 : 0
      }
    };
    return Object.assign(base, changes);
  };

export default class Behaviors extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      students: students
    };

    this.state = this.initialState;
  }

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
    const studentOptions = this.state.students.map((student, index) => {
      return {
        value: student.student_id,
        label: `${student.last_name}, ${student.first_name} ${
          student.grade_level
        }`
      };
    });

    return (
      <div className="dbTestContainer">
        <div className="addStudentsContainer">
          <div className="behaviorsForm">
            <div className="boxHeading">
              <h1>Input Behaviors</h1>
            </div>
            <form className="studentsFormWrap" tabIndex="0">
              <Select
                options={studentOptions}
                placeholder={"Select Student"}
                styles={
                    { valueContainer: studentStyleBg,
                      indicatorsContainer: studentStyleBg,
                      control: controlStyles }
                    
                }
              />
              <input type="button" value="Submit" onClick={this.submitForm} />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
