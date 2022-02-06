// Define imports and constants
const express = require("express");
const bodyParser = require("body-parser");
const tools = require("./tools");
const PORT = process.env.PORT || 3000;

// Define app
var app = express();
app.use(bodyParser.text());

// Define POST count endpoint
app.post("/count", (req, res) => {
  // Get unique words
  var text = req.body;
  var words = tools.uniqueWords(text);

  // Get number of occurrences
  var occurrences = [];
  words.forEach((word) => {
    occurrences.push([word, tools.wordCount(word, text)]);
  });

  // Sort by number of occurrences and get top 10
  occurrences.sort(function (first, second) {
    return second[1] - first[1];
  });
  res.send(occurrences.slice(0, 10));
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
