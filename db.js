const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite",
});

const Joke = sequelize.define("Joke", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  question: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  reponse: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

async function syncDB() {
  await sequelize.sync();
}

module.exports = { sequelize, Joke, syncDB };
