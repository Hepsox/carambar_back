const express = require("express");
const app = express();
const port = 3000;

const { syncDB } = require("./db.js");
const { addJoke } = require("./controllers/jokeController.js");

app.use(express.json());

syncDB();

app.post("/jokes", addJoke);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
