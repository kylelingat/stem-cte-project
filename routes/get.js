'use strict';
const Pool = require('pg-pool');
const config = require('../config.json');
console.log('config', config);
const {
  table,
  host,
  database,
  user,
  password,
  port
} = config;
const pool = new Pool({
  host,
  database,
  user,
  password,
  port,
  idleTimeoutMillis: 1000
});


console.log('table', table)

module.exports.getStudent = (event, context, callback) => {

  const getALLStudents = `SELECT * FROM ${table};`;

  pool.connect()
    .then(client => {
      client.release();
      return client.query(getALLStudents);
    })
    .then(data => {
      const response = {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': true
        },
        body: JSON.stringify({
          message: data,
          input: event,
        }),
      };


      callback(null, response);
    })

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};