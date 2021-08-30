"use strict";

var _request = require("./request");

// Elementleri Seçme 
var list = document.getElementById("list");
var deneme = document.getElementById("deneme");
var homeabout = document.getRootNode("homeabout");
var request = new _request.Request("http://localhost:3000/employees");
var request = new _request.Request("http://localhost:3000/teams");
request.get().then(function (employees) {
  return console.log(employees);
})["catch"](function (err) {
  return console.log(err);
});