const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

const { syncDB } = require("./db.js");
const {
  addJoke,
  getAllJokes,
  getJokeById,
  getRandomJoke,
} = require("./controllers/jokeController.js");

app.use(cors());
app.use(express.json());

syncDB();

app.post("/blagues", addJoke);
app.get("/blagues", getAllJokes);
app.get("/blagues/random", getRandomJoke);
app.get("/blagues/:id", getJokeById);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
