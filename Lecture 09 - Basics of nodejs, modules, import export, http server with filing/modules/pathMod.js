const path = require("path");

const pathObj = path.parse(__filename);

console.log(pathObj);

const pathObj2 = path.join("api", "users", "login");
console.log(pathObj2); // api\users\login

const pathObj3 = path.join(__dirname, "api", "users", "login");
console.log(pathObj3); // d:\BSCS VIII\EAD\practice\Lecture 09\modules\api\users\login

const normalizedPath = path.normalize("api//users/login");
console.log(normalizedPath); // api\users\login

const absolutePath = path.isAbsolute("api//users/login");
console.log(absolutePath); // false

const absolutePath2 = path.isAbsolute(__filename);
console.log(absolutePath2); // true

const absolutePath3 = path.isAbsolute(
  "D:\\BSCS VIII\\EAD\\practice\\Lecture 09\\modules\\api\\users\\login"
);
console.log(absolutePath3); // true

const ext = path.extname(__filename);
console.log(ext); // .js
