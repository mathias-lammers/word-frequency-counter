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

// Define POST endpoint
app.post("/count", (req, res) => {
  var word = "banan"; // For testing purpose
  var text = req.body.text;
  var nOccurances = WordCount(word, text);
  res.send(`${word} occurs ${nOccurances} times in text: ${text}`);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

function WordCount(word, text) {
  var re = new RegExp(`\\b${word}\\b`, "g");
  var count = (text.match(re) || []).length;
  return count;
}
