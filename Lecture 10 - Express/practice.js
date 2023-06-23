const express = require("express");
const app = express();

app.use(express.json());
/**
 * express.json() is a method inbuilt in express to
 * recognize the incoming Request Object as a JSON Object.
 */
app.use(express.urlencoded({ extended: false }));
/**
 * express.urlencoded() is a method inbuilt in express to
 * recognize the incoming Request Object as strings or arrays.
 * This method is called as a middleware in your application
 * using the code: app.use(express.urlencoded());
 * extended - false: The "extended" syntax allows for rich objects
 * and arrays to be encoded into the URL-encoded format,
 * allowing for a JSON-like experience with URL-encoded.
 */

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
  res.send({ name: "Siddharth", age: 20 });
});

app.listen(3000, () => {
  // Port number
  console.log("Server is running on port 3000");
});
