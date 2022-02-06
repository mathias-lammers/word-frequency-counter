# word-frequency-counter

A node.js RESTful API that returns the 10 most frequent words of a text, as well as the number of times they occur.

## Install

Clone project to directory of your choice and install necessary dependencies from the root directory:

```
$ npm install
```

## Run

Start the server by executing the following from the root directory:

```
$ node src/
```

The server will now be listening at `http://localhost:3000/`.

## Use

The API has a single `POST` endpoint `/count`, which will take the text of the request body and return a sorted array of tuples with the 10 most frequent words and their number of occurrences.

Included in the repository is `example_lyrics.txt`, containing the lyrics of Journey's hit song Don't Stop Believing. We can use the content of this file as an example of how this endpoint can be used:

```
$ curl -H "Content-type: text/plain" -X "POST" -d "@example_lyrics.txt" http://localhost:3000/count
> [["a",41],["in",32],["the",17],["on",16],["to",11],["and",10],["just",5],["people",4],["peoplelivin'",2],["took",2]]
```

As can be noticed from the snippet above, the endpoint does not handle newline characters properly yet.

## TODOs

- Fix the handling of newline characters.
- Include safeguards if the request does not contain expected data.
