var mysql = require("mysql");
const { Connection, Request } = require("tedious");
/** Create pool of sql connection that will common for all quries */
// const pool = mysql.createPool({
//   host: "interview-easy.database.windows.net",
//   port: 1433,
//   user: "Interview-Easy",
//   password: "Azure@8594",
//   database: "Interview-Easy",
// });
//console.log("POOL", pool);
/** Database calls that will use to run the query **/

const config = {
  authentication: {
    options: {
      userName: "Interview-Easy", // update me
      password: "Azure@8594", // update me,
    },
    type: "default",
  },
  server: "interview-easy.database.windows.net", // update me
  options: {
    database: "Interview-Easy", //update me
    encrypt: true,
    rowCollectionOnRequestCompletion: true,
    // useColumnNames: true,
  },
};

const connection = new Connection(config);

//Attempt to connect and execute queries if connection goes through
connection.on("connect", (err, res) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log("Connected");
  }
});

connection.connect();

module.exports = connection;
