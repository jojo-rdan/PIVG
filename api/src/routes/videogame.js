const {Router} = require('express');
//const {getVideogameById, addVideogame} = require('../controllers/videogame')
const {addVideogame} = require('../controllers/videogame')
const router = Router();

router.post('/', addVideogame)

// router.get('/:id', getVideogameById)
// router.post('/', addVideogame)



module.exports = router;