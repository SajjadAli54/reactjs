const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { title: "Home" });
});

app.get("/products", (req, res) => {
  const products = [
    { id: 1, name: "Product 1", price: 1000 },
    { id: 2, name: "Product 2", price: 2000 },
    { id: 3, name: "Product 3", price: 3000 },
    { id: 4, name: "Product 4", price: 4000 },
    { id: 5, name: "Product 5", price: 5000 },
  ];
  res.render("products", { title: "Products", products: products });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});
