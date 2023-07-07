// use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
const connectionString = "mongodb://127.0.0.1:27017/ead";

const mongoose = require("mongoose");
mongoose.connect(connectionString);

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: String,
  price: Number,
  qty: Number,
  manufacturer: String,
});

module.exports = mongoose.model("product", ProductSchema);
