module.exports = {
  /**
   * Count the case insensitive occurrences of a substring in a string;
   * @param {String} word   The word to search for
   * @param {String} text   The text to search in
   * @returns               Number of occurrences
   */
  wordCount: function (word, text) {
    var re = new RegExp(`${word}`, "gi");
    var count = text.match(re).length;
    return count;
  },
  /**
   * Get unique words in a text;
   * @param {String} text   The text to get words from
   * @returns               Array of unique words
   */
  uniqueWords: function (text) {
    var words = text
      .replace(/[,.?!]/g, "")
      .split(" ")
      .map((word) => {
        return word.toLowerCase();
      });
    var uniqueWords = [...new Set(words)];
    return uniqueWords;
  },
};
