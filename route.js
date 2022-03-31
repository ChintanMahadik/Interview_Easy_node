var express = require("express");
var app = express();

var apifunction = require("./api");

/** Sign Up API */
app.post("/signUp", function (req, res) {
  apifunction.signUp(req, res);
});

/** Sign In API */
app.post("/signIn", function (req, res) {
  apifunction.signIn(req, res);
});

/** Edit User Profile API */
app.post("/editUserProfile", function (req, res) {
  apifunction.editUserProfile(req, res);
});

/** Upload Image to s3 bucket API */
app.post("/uploadFiles", function (req, res) {
  apifunction.uploadFiles(req, res);
});

/** Search User by city or state API */
app.post("/SearchUser", function (req, res) {
  apifunction.SearchUser(req, res);
});

/** Send Request API */
app.post("/SendRequest", function (req, res) {
  apifunction.SendRequest(req, res);
});

/** Request List API */
app.post("/requestList", function (req, res) {
  apifunction.requestList(req, res);
});

/** Request Accept/Reject API */
app.post("/acceptrejectRequest", function (req, res) {
  apifunction.acceptrejectRequest(req, res);
});

/** Request Accepted API */
app.post("/acceptedList", function (req, res) {
  apifunction.acceptedList(req, res);
});

/** Request removed from list API */
app.post("/removeFromList", function (req, res) {
  apifunction.removeFromList(req, res);
});

app.post("/createCategory", function (req, res) {
  apifunction.createCategory(req, res);
});

app.get("/viewCategories", function (req, res) {
  apifunction.viewCategories(req, res);
});

module.exports = app;
