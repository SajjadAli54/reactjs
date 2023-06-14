const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "about.html"));
});

app.get("/student", (req, res) => {
  res.json({ name: "John", age: 23, city: "New York" });
});

app.post("/student/save", (req, res) => {
  console.log(req.body);
  res.json(req.body);
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "404.html"));
});

app.listen(3000, () => console.log("Server running on port 3000"));
