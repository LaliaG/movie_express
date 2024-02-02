// Exemple d'utilisation du modèle dans une route
//const router = express.Router()
const Movie = require('./models/movie');


exports.createMovie = async (req, res) => {
    try {
      const newMovie = await Movie.createnew(req.body);
      res.status(201).json(newMovie);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

 


  