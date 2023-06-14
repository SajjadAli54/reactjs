# Installing Express

```sh
yarn init
yarn add express
```

Dependencies and dev dependencies

# Basic express app

```js
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
  res.send("About");
});

app.listen(3000, () => console.log("Server running on port 3000"));
```

# Sending html files

```js
const express = require("express");
const path = require("path");
const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "about.html"));
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "404.html"));
});

app.listen(3000, () => console.log("Server running on port 3000"));
```

# Sending data

```js
app.get("/student", (req, res) => {
  res.send({ name: "John", age: 23, city: "New York" });
});
```

```js
app.get("/student", (req, res) => {
  res.json({ name: "John", age: 23, city: "New York" });
});
```

# Express with Body parser

```js
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
```

![1686720531644](image/README/1686720531644.png)

# Discussion on CI/CD Pipeline
