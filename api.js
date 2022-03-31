var express = require("express");
var app = express();
var aws = require("aws-sdk");
var DB = require("./dbconnection");
var validator = require("validator");
const { Request } = require("tedious");

module.exports = {
  /* Api to createCategory */
  createCategory: (req, res) => {
    const db = DB;
    const params = req.body;
    const { category_name } = params;
    console.log("params", params);
    const request = new Request(
      `INSERT INTO IE_CATEGORIES(category_name) VALUES('${category_name}')`,
      (err, rowCount, rows) => {
        if (err) {
          res.json({
            result: "Failure",
            error: err.message,
            message: `${category_name} category is already added`,
          });
        } else {
          res.json({
            result: "Success",
            message: `Category ${category_name} added successfully `,
          });
        }
      }
    );

    db.execSql(request);
  },

  viewCategories: (req, res) => {
    const db = DB;
    let result3 = [];

    const request = new Request(
      "Select * from IE_CATEGORIES",
      (err, rowCount, rows) => {
        if (err) {
          res.json({
            result: "Failure",
            error: err.message,
            message: `category not found`,
          });
        } else {
          res.json({
            result: "Success",
            message: "Category List fetched",
            data: result3,
          });
        }
      }
    );

    request.on("row", function (columns) {
      result3.push({
        id: columns[0].value,
        category_name: columns[1].value,
      });
    });

    db.execSql(request);
  },
};
