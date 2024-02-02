const express = require("express")
const router = express.Router();
const movieControllers = require('./controllers/movieControllers');

router.post('/movies', movieControllers.createMovie);
/*router.get('/:id', livreController.getLivreById);
router.post('/', livreController.addLivre);
router.put('/:id', livreController.updateLivre);
router.delete('/:id', livreController.deleteLivre);*/

module.exports = router;


