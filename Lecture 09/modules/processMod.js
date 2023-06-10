const process = require("process");

console.log(process.pid);
console.log(process.versions.node);
console.log(process.argv);

const num = process.argv[2];

switch (num) {
  case "1":
    console.log("One");
    break;
  case "2":
    console.log("Two");
}

process.kill(process.pid);
