import React, { Component } from "react";
import Select from "react-select";
import axios from "axios";

var students = []
export default class InputBehaviors extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount = () => {
    this.props.retrieveStudents();
  };


  render() {
    return (
      <div className="inputContainer">
      <div className="selectGrid">
                <input
                  placeholder={timestamp}
                  onChange={this.handleCommentChange}
                  readOnly
                />
                <Select
                  options={this.props.studentOptions}
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
      </div>
    );
  }}

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