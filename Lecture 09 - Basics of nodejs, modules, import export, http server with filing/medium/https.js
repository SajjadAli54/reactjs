const http = require("http");
const fs = require("fs");
const path = require("path");

const home = "home.html";
const about = "about.html";
const notFound = "notFound.html";

const server = http.createServer((request, response) => {
  console.log(request.url);
  switch (request.url) {
    case "/":
      sendResponse(response, home);
      break;
    case "/about":
      sendResponse(response, about);
      break;
    case "/page":
      // sendResponse(response, "page.html");
      const joinedPath = path.join(__dirname, "pages", "page.html");
      const data = fs.readFileSync(joinedPath).toString();
      response.end(data);
      break;
    default:
      sendResponse(response, notFound);
      break;
  }
});

function sendResponse(response, filename) {
  const joinedPath = path.join(__dirname, filename);
  const data = fs.readFileSync(joinedPath).toString();
  response.end(data);
}

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
