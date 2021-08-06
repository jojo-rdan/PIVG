const {Router} = require('express');
const {getAllVideogames, getVideogameById, addVideogame} = require('../controllers/videogame')
const router = Router();

router.get('/', getAllVideogames)
router.get('/:id', getVideogameById)
router.post('/', addVideogame)



module.exports = router;