import React, { Component } from "react";
import Select from "react-select";
import axios from "axios";
import Modal from "react-modal";
import "./Behaviors.css";
Modal.setAppElement("#root");
var students = [];

const studentStyleBg = (base, state) => {
  let changes = {
    backgroundColor: "var(--inputBg-color)"
  };
  return Object.assign(base, changes);
};

const indicatorSeparatorStyle = (base, state) => {
  let changes = {
    display: "none"
  };
  return Object.assign(base, changes);
};

const placeholderStyle = (base, state) => {
  let changes = {
    color: "rgba(255,255,255,0.6)"
  };
  return Object.assign(base, changes);
};

const inputStyle = (base, state) => {
  let changes = {
    color: "rgba(255,255,255,0.8)"
  };
  return Object.assign(base, changes);
};

const controlStyle = (base, state) => {
  let changes = {
    border: "0px solid transparent",
    ...base,
    border: state.isFocused ? 0 : 0,
    // This line disable the blue border
    boxShadow: state.isFocused ? 0 : 0,
    "&:hover": {
      border: state.isFocused ? 0 : 0
    }
  };
  return Object.assign(base, changes);
};

const menuStyle = (base, state) => {
  let changes = {
    color: "rgba(255,255,255,0.8)",
    backgroundColor: "var(--sideBar-color)"
  };
  return Object.assign(base, changes);
};

const optionStyle = (base, state) => {
  let changes = {

    "&:hover": {
      backgroundColor: "var(--contentBg-color)",
      cursor: "pointer"
    }
  };
  return Object.assign(base, changes);
};

const selectStyles = {
  valueContainer: studentStyleBg,
  indicatorsContainer: studentStyleBg,
  indicatorSeparator: indicatorSeparatorStyle,
  placeholder: placeholderStyle,
  input: inputStyle,
  singleValue: inputStyle,
  control: controlStyle,
  menu: menuStyle,
  option: optionStyle
};

const goalOptions = [
  {
    value: "approach",
    label:
      "Approach/greet/start a conversation with others at an appropriate time (not interrupting)"
  },
  {
    value: "self",
    label:
      "Self-management: uses methods to reduce anxiety, stress, or over excitement in real and simulated situations"
  },
  {
    value: "verbal",
    label:
      "Verbal directions: Complete the requested task in the time permitted, with no more than 1 prompt"
  },
  {
    value: "want",
    label:
      "When has a want/need, independently states his reason for the needed attention"
  },
  {
    value: "written",
    label:
      "Written directions: Complete the requested task in the time permitted, with no more than 1 prompt"
  },
  { value: "other", label: "Other" }
];

const appropriateOption = [
  { value: "appropriate", label: "Appropriate behavior/Independent" },
  { value: "inappropriate", label: "Inappropriate behavior/Not Independent" }
];

export default class Behaviors extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      students: students,
      selectedStudent: "",
      selectedGoal: "",
      selectedOutcome: ""
      
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
              <div className="selectGrid">
                <Select
                  options={studentOptions}
                  placeholder={"Select Student"}
                  styles={selectStyles}
                />
                <Select
                  options={goalOptions}
                  placeholder={"Select Goal"}
                  styles={selectStyles}
                />
                <Select
                  options={appropriateOption}
                  placeholder={"Select Goal Outcome"}
                  styles={selectStyles}
                />
              </div>
              <input type="button" value="Submit" onClick={this.submitForm} />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
