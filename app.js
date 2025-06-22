const express = require("express");
const app = express();
const port = 3000;

const { syncDB } = require("./db.js");
const {
  addJoke,
  getAllJokes,
  getJokeById,
} = require("./controllers/jokeController.js");

app.use(express.json());

syncDB();

app.post("/blagues", addJoke);
app.get("/blagues", getAllJokes);
app.get("/blagues/:id", getJokeById);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
