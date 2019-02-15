import React, { Component } from "react";
import axios from "axios";

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
    axios.post('https://v4pq771b89.execute-api.us-west-2.amazonaws.com/dev/post', {
      first_name: this.state.firstName,
      last_name: this.state.lastName,
      grade_level: this.state.grade
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
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
        <form className="studentsFormWrap" tabIndex="0">
          <input
            type="text"
            placeholder="Name"
            name="firstName"
            autoComplete="off"
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            autoComplete="off"
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="Grade Level"
            name="grade"
            autoComplete="off"
            onChange={this.handleChange}
          />
          <input type="button" value="Submit" onClick={this.submitForm}/>
        </form>
      </div>
    );
  }
}
