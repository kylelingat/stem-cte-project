import React, { Component } from "react";
import Select from "react-select";
import axios from "axios";
import Modal from "react-modal";
import ReactTable from "react-table";
import "react-table/react-table.css";
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

var d = new Date();
var timestamp = `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;

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

const inappropriatePromptOption = [
  { value: "appropriate", label: "Verbal Prompt" }
];



const columns = [
  {
    Header: "Timestamp",
    accessor: "timestamp"
  },
  {
    Header: "Goal",
    accessor: "goal"
  },
  {
    Header: "Outcome",
    accessor: "outcome"
  },
  {
    Header: "If inappropriate, prompting needed?",
    accessor: "inappropriate"
  },
  {
    Header: "Comment",
    accessor: "comment"
  },
  {
    Header: "%age of Appropriateness",
    accessor: "percentage"
  }
];

export default class Behaviors extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      students: students,
      timestamp: timestamp,
      selectedStudent: "",
      selectedGoal: "",
      selectedOutcome: "",
      selectedPrompt: "",
      selectedComment: "",
      data: [
      ]
    };

    this.state = this.initialState;
  }

  componentDidMount = () => {
    this.retrieveStudents();
  };

  handleStudentChange = val => {
    this.setState({
      selectedStudent: val.label
    });
  };

  handleGoalChange = val => {
    this.setState({
      selectedGoal: val.label
    });
  };

  handleOutcomeChange = val => {
    this.setState({
      selectedOutcome: val.value
    });
  };

  hnadlePromptChange = val => {
    this.setState({
      selectedPrompt: val.value
    });
  };

  handleCommentChange = event => {
    const { value } = event.target;

    this.setState({
      selectedComment: value
    });
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

  submitForm = () => {
    var x = {
      timestamp: this.state.timestamp,
      goal: this.state.selectedGoal,
      outcome: this.state.selectedOutcome,
      inappropriate: this.state.selectedPrompt,
      comment: this.state.selectedComment,
      percentage: "0"
    };
    this.setState({ data: [...this.state.data, x] });
    let obj = this.state.data.find(o => o.selectedOutcome === 'Inappropriate behavior/Not Independent');
    console.log(obj)
    console.log(this.state.data)
  };

  handleKeyPress = event => {
    if (event.key == "Enter") {
      this.submitForm();
    }
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
      <div className="behaviorsContainer">
        <div className="dynamicTableContainer">
          <ReactTable
            columns={columns}
            data={this.state.data}
            className="behaviorTable"
            showPaginationBottom={false}
            resizable={false}
          />
        </div>
        <div className="inputStudentsContainer">
          <div className="behaviorsForm">
            <div className="boxHeading">
              <h1>Input Behaviors</h1>
            </div>
            <form className="studentsFormWrap" tabIndex="0">
              <div className="selectGrid">
                <input
                  placeholder={timestamp}
                  onChange={this.handleCommentChange}
                  readOnly
                />
                <Select
                  options={studentOptions}
                  placeholder={"Student"}
                  styles={selectStyles}
                  onChange={this.handleStudentChange}
                />
                <Select
                  options={goalOptions}
                  placeholder={"Goal"}
                  styles={selectStyles}
                  onChange={this.handleGoalChange}
                />
                <Select
                  options={appropriateOption}
                  placeholder={"Goal Outcome"}
                  styles={selectStyles}
                  onChange={this.handleOutcomeChange}
                />
                <Select
                  options={inappropriatePromptOption}
                  placeholder={"Prompting Needed?"}
                  styles={selectStyles}
                  onChange={this.hnadlePromptChange}
                />
                <input
                  placeholder={"Comment"}
                  onChange={this.handleCommentChange}
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
