const {Router} = require('express');
const {Genre} = require('../db')
const router = Router();

router.get('/', (req, res) => {
    res.send('Soy la ruta de Genres!')
})

module.exports = router;