import React, { Component } from "react";
import "./db.css";
import axios from "axios";
import ReactTable from "react-table";
import "react-table/react-table.css";

export default class DbTest extends Component {
  componentDidMount() {
    axios
      .get(`https://v4pq771b89.execute-api.us-west-2.amazonaws.com/dev/get`)
      .then(res => {
        const persons = res.data.message.rows;
        console.log(persons);
      });
  }

  render() {
    const data = [
      {
        firstName: "Jacob",
        lastName: "Harris",
        grade: 9
      }
    ];

    const columns = [
      {
        Header: "First Name",
        accessor: "firstName" // String-based value accessors!
      },
      {
        Header: "Last Name",
        accessor: "lastName"
      },
      {
        Header: "Grade",
        accessor: "grade"
      }
    ];

    return (
      <div className="dbTestContainer">
        <ReactTable
          data={data}
          columns={columns}
          defaultPageSize={5}
          showPaginationBottom={false}
          className="dbTable"
        />
      </div>
    );
  }
}
