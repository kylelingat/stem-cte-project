import React from "react";

export const TableHeader = () => {
  return (
    <thead className="currStudents--head">
      <tr className="currStudents--tableHeading">
        <th>First Name</th>
        <th>Last Name</th>
        <th>Grade</th>
        <th />
        <th />
      </tr>
    </thead>
  );
};

export const TableBody = props => {
  if(props.students === null){
    return <tbody className="currStudents--body"></tbody>
  }
    var retrieveArray = localStorage.getItem("studentArray");
    const rows =  props.students.map((row, index) => {
      return (
        <tr key={index}>
          <td>{row.firstName}</td>
          <td>{row.lastName}</td>
          <td>{row.grade}</td>
          <td>
            <div className="currStudents--hiddenText">View Profile</div>
          </td>
          <td className="currStudents--removeStudent">
            <div onClick={() => props.removeStudents(index)}>
              <div className="currStudents--hiddenText">&#10006;</div>
            </div>
          </td>
        </tr>
      );
    });
    return <tbody className="currStudents--body">{rows}</tbody>;
  }
