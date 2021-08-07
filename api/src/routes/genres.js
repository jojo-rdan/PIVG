const {Router} = require('express');
const {getAllGenres} = require('../controllers/genre')
const router = Router();

router.get('/', getAllGenres)

module.exports = router;