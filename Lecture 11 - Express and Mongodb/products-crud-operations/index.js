const express = require("express");
const app = express();

const Product = require("./models/product");

app.use(express.json());
app.use(express.urlencoded());
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/products", async (req, res) => {
  const products = await Product.find();
  res.render("products", {
    title: "Products",
    products: products,
  });
});

app.get("/product/new", (req, res) => {
  res.render("newProduct", {
    product: {},
  });
});

app.get("/product/:pid", async (req, res) => {
  console.log(req.params.pid);
  const product = await Product.findById(req?.params?.pid);
  res.render("product-details", {
    product: product,
  });
});

app.get("/product/delete/:pid", async (req, res) => {
  const product = await Product.findByIdAndDelete(req.params.pid);
  res.redirect("/products");
});

app.get("/product/edit/:pid", async (req, res) => {
  const product = await Product.findById(req.params.pid);
  res.render("newProduct", {
    product: product,
  });
});

app.post("/product/update/:pid", async (req, res) => {
  const { pid } = req.params;
  const { body } = req;

  await Product.findByIdAndUpdate(pid, body);
  res.redirect("/products");
});

app.get("/products/get", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

const validateProductMiddleWare = (req, res, next) => {
  const { name, price, qty, manufacturer } = req.body;

  if (!name || !price || !qty || !manufacturer)
    return res.redirect("/product/save");
  next();
};

// Form data is in urlencoded form
app.post("/product/save", validateProductMiddleWare, (req, res) => {
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
