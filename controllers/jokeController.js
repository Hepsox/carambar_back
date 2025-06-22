const { Joke } = require("../db.js");

const addJoke = async (req, res) => {
  const { question, reponse } = req.body;
  if (!question || !reponse) {
    return res
      .status(400)
      .json({ error: "Champs 'question' et 'reponse' requis." });
  }
  try {
    const joke = await Joke.create({ question, reponse });
    res.status(201).json(joke);
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de l'ajout de la blague." });
  }
};

const getAllJokes = async (req, res) => {
  try {
    const jokes = await Joke.findAll();
    res.json(jokes);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Erreur lors de la récupération des blagues." });
  }
};

module.exports = { addJoke, getAllJokes };
