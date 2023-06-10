/**
 * Module Object
 *  - exports
 *  - require
 *  - module
 *  - __filename
 *  - __dirname
 *  - ...
 */
console.log(module);

const fs = require("fs");
/**
 * fs is a core module
 *  1. Core Module
 *  2. File or Folder
 *
 */
console.log(fs);

const lib = require("./lib");
console.log(JSON.stringify(lib));
