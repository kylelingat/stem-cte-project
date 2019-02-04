import React, { Component } from "react";

export default class AddStudents extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      firstName: "",
      lastName: "",
      grade: ""
    };

    this.state = this.initialState;
  }

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  submitForm = () => {
    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
  };

  handleKeyPress = event => {
    if (event.key == "Enter") {
      this.submitForm();
    }
  };
  render() {
    const { firstName, lastName, grade } = this.state;
    return (
      <div className="studentsForm">
      <div className="boxHeading">
      <h1>Add Students</h1>
      </div>
        <form className="studentsFormWrap" tabIndex="0" onKeyPress={this.handleKeyPress}>
          <input
            type="text"
            placeholder="Name"
            name="firstName"
            value={firstName}
            autoComplete="off"
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={lastName}
            autoComplete="off"
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="Grade Level"
            name="grade"
            value={grade}
            autoComplete="off"
            onChange={this.handleChange}
          />
          <input type="button" value="Submit" onClick={this.submitForm} />
        </form>
      </div>
    );
  }
}
