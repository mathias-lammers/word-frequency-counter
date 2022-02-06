// Define imports
const express = require("express");
const bodyParser = require("body-parser");

// Define app
const app = express();
app.use(bodyParser.json());

// Return placeholder message
app.get("/", (req, res) => {
  res.send("Hello world");
});

// Start server
app.listen(3001, () => {
  console.log("listening on port 3001");
});
