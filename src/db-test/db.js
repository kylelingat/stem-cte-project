import React, { Component } from "react";
import "./db.css";
import axios from "axios";
import ReactTable from "react-table";
import "react-table/react-table.css";
var students;
var data;

export default class DbTest extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            students: students
        };
      }

    componentDidMount = () => {
    axios
      .get(`https://v4pq771b89.execute-api.us-west-2.amazonaws.com/dev/get`)
      .then(res => {
        students = res.data.message.rows;
        this.setState({
            students: students
        })
        console.log(this.state.students);
      });
  }

  render() {
    const columns = [
      {
        Header: "First Name",
        accessor: "first_name" // String-based value accessors!
      },
      {
        Header: "Last Name",
        accessor: "last_name"
      },
      {
        Header: "Grade",
        accessor: "grade_level"
      }
    ];

    return (
      <div className="dbTestContainer">
        <ReactTable
          data={this.state.students}
          columns={columns}
          defaultPageSize={5}
          showPaginationBottom={false}
          className="dbTable"
        />
      </div>
    );
  }
}
