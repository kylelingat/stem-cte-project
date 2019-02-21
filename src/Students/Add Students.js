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
    this.props.modalLoading()
    axios.post('https://v4pq771b89.execute-api.us-west-2.amazonaws.com/dev/post', {
      first_name: this.state.firstName,
      last_name: this.state.lastName,
      grade_level: this.state.grade
    })
    .then( (response)=> {
      console.log(response);
      this.props.modalLoading()
      this.props.retrieveStudents()
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
        <form className="studentsFormWrap" tabIndex="0" onKeyPress={this.handleKeyPress}>
          <input
            type="text"
            placeholder="Name"
            name="firstName"
            autoComplete="off"
            value={this.state.firstName}
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            autoComplete="off"
            value={this.state.lastName}
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="Grade Level"
            name="grade"
            autoComplete="off"
            value={this.state.grade}
            onChange={this.handleChange}
          />
          <input type="button" value="Submit" onClick={this.submitForm}/>
        </form>
      </div>
    );
  }
}
