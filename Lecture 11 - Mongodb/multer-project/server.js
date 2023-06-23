const express = require("express");
const upload = require("./middlewares/upload");

const app = express();

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/upload.html");
});

app.post("/upload", upload.single("file"), (req, res) => {
  res.json({ file: req.file, message: "File uploaded successfully." });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});
