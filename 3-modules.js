// CommonJs, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const { john, peter } = require("./4-names"); // 1st way of initiating a variable in ES6
const names = require("./4-names"); // 2nd way of initiating a variable in javascript
const sayHi = require("./5-utils");
const data = require("./6-alternative-flavor");
require("./7-mind-grenade");
// console.log(names);
console.log(data);

sayHi("susan");
sayHi(john); // 1st way
sayHi(peter); // 1st way
sayHi(names.john); // 2nd way
sayHi(names.peter); // 2nd way
