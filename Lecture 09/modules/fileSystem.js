const fs = require("fs");
/**
 * fs is a core module
 *  1. Core Module
 *  2. File or Folder
 *
 */
// console.log(fs);

fs.writeFileSync("test.txt", "Hello World");

const data = fs.readFileSync("test.txt");
console.log(data); // <Buffer 48 65 6c 6c 6f 20 57 6f 72 6c 64>
console.log(data.toString());
