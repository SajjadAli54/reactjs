const express = require("express");
const app = express();

const Product = require("./models/product");

app.use(express.json());
app.use(express.urlencoded());
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/products", (req, res) => {
  Product.find().then((products) => {
    res.render("products", {
      title: "Products",
      products: products,
    });
  });
});

app.get("/product/new", (req, res) => {
  res.render("newProduct");
});

// Form data is in urlencoded form
app.post("/product/save", (req, res) => {
  const product = new Product(req.body);
  product
    .save()
    .then((product) => {
      if (!product) return res.redirect("/product/new");
      res.redirect("/products");
    })
    .catch((error) => {
      console.log(error);
      res.redirect("/product/new");
    });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});
