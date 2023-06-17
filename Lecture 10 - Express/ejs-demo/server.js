const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const mascots = [
    { name: "Sammy", organization: "DigitalOcean", birth_year: 2012 },
    { name: "Tux", organization: "Linux", birth_year: 1996 },
    { name: "Moby Dock", organization: "Docker", birth_year: 2013 },
  ];
  const tagline =
    "No programming concept is complete without a cute animal mascot.";

  res.render("pages/index", {
    mascots: mascots,
    tagline: tagline,
  });
});

app.get("/about", (req, res) => {
  // res.send("About page");
  res.render("pages/about");
});

app.get("/contact", (req, res) => {
  // res.send("Contact page");
  res.render("pages/contact");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
