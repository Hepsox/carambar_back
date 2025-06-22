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
const getJokeById = async (req, res) => {
  try {
    const joke = await Joke.findByPk(req.params.id);
    if (!joke) {
      return res.status(404).json({ error: "Blague non trouvée." });
    }
    res.json(joke);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Erreur lors de la récupération de la blague." });
  }
};

const getRandomJoke = async (req, res) => {
  try {
    const count = await Joke.count();
    if (count === 0) {
      return res.status(404).json({ error: "Aucune blague disponible." });
    }
    const randomIndex = Math.floor(Math.random() * count);
    const joke = await Joke.findOne({ offset: randomIndex });
    if (!joke) {
      return res.status(404).json({ error: "Blague non trouvée." });
    }
    res.json(joke);
  } catch (error) {
    console.error("Erreur getRandomJoke:", error);
    res.status(500).json({
      error: "Erreur lors de la récupération d'une blague aléatoire.",
    });
  }
};

module.exports = { addJoke, getAllJokes, getJokeById, getRandomJoke };
