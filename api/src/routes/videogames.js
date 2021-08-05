const {Router} = require('express');
const { v4: uuidv4 } = require('uuid');
const {Videogame} = require('../db')
const router = Router();

router.get('/', (req, res, next) => {
   return Videogame.findAll()
    .then((videogames) => res.send(videogames))
    .catch((error) => next(error))
})
router.get('/:id', (req, res, next) => {
    const id = req.params.id
    return Videogame.findByPk(id)
    .then((videogame) => res.send(videogame))
    .catch((error) => next(error))
})
router.post('/', (req, res, next) => {
    const videogame = req.body
    return Videogame.create({
        ...videogame,
        id: uuidv4()
    })
    .then((videogames) => res.send(videogames))
    .catch((error) => next(error))
})



module.exports = router;