const {Router} = require('express');
//const {getVideogameById, addVideogame} = require('../controllers/videogame')
const {getAllVideogames} = require('../controllers/videogames')
const router = Router();

router.get('/', getAllVideogames)

// router.get('/:id', getVideogameById)
// router.post('/', addVideogame)



module.exports = router;