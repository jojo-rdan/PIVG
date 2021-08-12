const {Router} = require('express');
const {addVideogame} = require('../controllers/videogame')
const {getVideogameById} = require('../controllers/videogameById')
const router = Router();

router.post('/', addVideogame)
router.get('/:id', getVideogameById)



module.exports = router;