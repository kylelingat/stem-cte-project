import React, { Component } from "react";
import HorizontalNav from "../Horizontal Nav/Horizontal Nav.js";
import InputBehaviors from "./Input.js";
import DataTable from "./Data Table.js";

let section;
export default class Behaviors extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      section: null,
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

  sectionSwitchHandler = section => {
    this.setState({
      section: section
    });
    console.log("ss");
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

  handlePromptChange = val => {
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
  };

  clearDataTable = () => {
    this.setState({data: []})
  }

  render() {
    return (
      <div className="behaviorsContainer">
        <HorizontalNav
          currPage={this.props.currPage}
          sectionSwitchHandler={this.sectionSwitchHandler}
        />
        {this.state.section === "dataTable" ? (
          <DataTable 
          data={this.state.data}
          clearDataTable={this.clearDataTable}
          />
        ) : (
          <InputBehaviors
            students={this.props.students}
            studentOptions={this.props.studentOptions}
            retrieveStudents={this.props.retrieveStudents}
            handleStudentChange={this.handleStudentChange}
            handleGoalChange={this.handleGoalChange}
            handleOutcomeChange={this.handleOutcomeChange}
            handlePromptChange={this.handlePromptChange}
            handleCommentChange={this.handleCommentChange}
            submitForm={this.submitForm}
          />
        )}
      </div>
    );
  }
}

var d = new Date();
var timestamp = `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
