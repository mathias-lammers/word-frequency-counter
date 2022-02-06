// Define imports and constants
const express = require("express");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3000;

// Define app
var app = express();
app.use(express.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// Define POST count endpoint
app.post("/count", (req, res) => {
  // Get unique words
  var text = req.body.text;
  var words = uniqueWords(text);

  // Get number of occurrences
  var occurrences = [];
  words.forEach((word) => {
    occurrences.push([word, wordCount(word, text)]);
  });

  // Sort by number of occurrences and get top 10
  occurrences
    .sort(function (first, second) {
      return second[1] - first[1];
    })
    .slice(0, 10);

  res.send(occurrences);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

/**
 * Count the case insensitive occurrences of a substring in a string;
 * @param {String} word   The word to search for
 * @param {String} text   The text to search in
 * @returns               Number of occurrences
 */
function wordCount(word, text) {
  var re = new RegExp(`${word}`, "gi");
  var count = text.match(re).length;
  return count;
}

/**
 * Get unique words in a text;
 * @param {String} text   The text to get words from
 * @returns               Array of unique words
 */
function uniqueWords(text) {
  var words = text
    .replace(/[,.?!]/g, "")
    .split(" ")
    .map((word) => {
      return word.toLowerCase();
    });
  var uniqueWords = [...new Set(words)];
  return uniqueWords;
}
