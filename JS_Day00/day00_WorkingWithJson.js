//var testData = require("/Users/yusufkucukvatan/Desktop/JavaScript Programming/TestData/Data.json");
var testData = require("../JavaScript Programming/TestData/Data.json");
console.log(testData.Name);
console.log(testData.ID);

var students = require("../JavaScript Programming/TestData/Students.json");
console.log(students.Nurzat);
console.log(students.Nurzat.Name);
console.log(students.Osman.Name); //==> Osman
console.log(students["Osman"]["Name"]); //==> Osman
console.log(students.Osman["Name"]); //==> Osman