// Connexion à MongoDB
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/cinema', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}); // Les options sont utilisées pour éviter les avertissements liés à la dépréciation des fonctionnalités.

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Erreur de connexion à MongoDB :'));
db.once('open', () => {
  console.log('Connecté à MongoDB');
}); // Ces lignes gèrent les événements liés à la connexion MongoDB. En cas d'erreur, un message est affiché dans la console. Si la connexion est établie avec succès, le message "Connecté à MongoDB" est affiché une fois.