"use strict";
const Pool = require("pg-pool");
const config = require("../config.json");
const { table, host, database, user, password, port } = config;
const pool = new Pool({
  host,
  database,
  user,
  password,
  port,
  idleTimeoutMillis: 1000
});

console.log("table", table);

module.exports.postStudent = (event, context, callback) => {
  let { first_name, last_name, grade_level } = event.body;

  const postStudent = "INSERT INTO " + table + " Values(default, $1, $2, $3)";

  pool
    .connect()
    .then(client => {
      client.release();
      return client.query(postStudent, [first_name, last_name, grade_level]);
    })
    .then(res => {
      const response = {
        statusCode: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": true
        },
        body: JSON.stringify(res)
      };
      callback(null, response);
      console.log("Your connection will now be terminated");
    })
    .catch(e => {
      console.log("error", e);
      const response = {
        statusCode: 500,
        body: JSON.stringify(e)
      };
      callback(null, response);
    });
};
