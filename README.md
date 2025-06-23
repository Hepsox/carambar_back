# Carambar API

API REST pour gérer des blagues Carambar avec Node.js, Express et SQLite.

## Installation

```bash
git clone https://github.com/Hepsox/carambar_back
cd carambar_back
npm install
```

## Lancement

```bash
npm start
```

L'application démarre sur le port **3000** : http://localhost:3000

## API Endpoints

### POST /blagues
Ajouter une blague
```json
{
  "question": "Votre question",
  "reponse": "Votre réponse"
}
```

### GET /blagues
Récupérer toutes les blagues

### GET /blagues/:id
Récupérer une blague par ID

### GET /blagues/random
Récupérer une blague aléatoire

## Technologies

- Node.js
- Express.js
- Sequelize
- SQLite
- CORS
