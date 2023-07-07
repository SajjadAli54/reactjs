const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let data = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith" },
  { id: 3, name: "Bob Johnson" },
];

app.get("/", (req, res) => {
  res.end("Hello World");
});

app.get("/api/data", (req, res) => {
  res.json(data);
});

app.post("/api/data", (req, res) => {
  const newData = req.body;
  data.push({
    id: data.length + 1,
    name: newData.name,
  });
  console.log("New data:", newData);
  res.json({ message: "Data received successfully!" });
});

app.delete("/api/data/:id", (req, res) => {
  const id = Number(req.params.id);
  const newData = data.filter((item) => item.id !== id);
  data = newData;
  res.json({ message: "Data deleted successfully!" });
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
