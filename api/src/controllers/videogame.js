const {Videogame} = require('../db');
const { v4: uuidv4 } = require('uuid');
function getAllVideogames(req, res, next) {
    //Para obtener todos los juegos de la DB
   return Videogame.findAll()
    .then((videogames) => res.send(videogames))
    .catch((error) => next(error))
}
function getVideogameById(req, res, next) {
    //Para obtener un juego por id
    const id = req.params.id
    return Videogame.findByPk(id)
    .then((videogame) => res.send(videogame))
    .catch((error) => next(error))
}
function addVideogame(req, res, next) {
    //Para postear/crear un nuevo juego y guardarlo en la DB
    const videogame = req.body
    return Videogame.create({
        ...videogame,
        id: uuidv4()
    })
    .then((videogames) => res.send(videogames))
    .catch((error) => next(error))
}

module.exports = {
    getAllVideogames,
    getVideogameById,
    addVideogame
}