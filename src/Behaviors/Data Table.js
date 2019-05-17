import React, { Component } from "react";
import HorizontalNav from "../Horizontal Nav/Horizontal Nav.js";
import ReactTable from "react-table";

export default class DataTable extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div className="dataTableContainer">
      <div className="tableButtonContainer">
        <div onClick={this.props.clearDataTable}>clear</div>
        <div>print</div>
      </div>
        <div className="dynamicTableContainer">
          <ReactTable
            columns={columns}
            data={this.props.data}
            className="behaviorTable"
            showPaginationBottom={false}
            resizable={false}
          />
        </div>
      </div>
    );
  }
}

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
