const queryString = require("querystring");
const obj = {
  name: "Sajjad Ali",
  age: 23,
};
console.log("Original object " + JSON.stringify(obj)); // { name: 'Sajjad Ali', age: 23 }
const str = queryString.stringify(obj);
console.log("query string from object " + str); // name=Sajjad%20Ali&age=23
const res = queryString.parse(str);
console.log("Parsed: " + JSON.stringify(res)); // { name: 'Sajjad Ali', age: '23' }
