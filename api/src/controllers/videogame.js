const {Videogame, Genre} = require('../db');
const { v4: uuidv4 } = require('uuid');
const { default: axios } = require("axios");
const {myApiKey} = require('../utils/config');

function addVideogame(req, res, next) { //WORKING!!! FALTA QUE PUEDA AGREGAR GENEROS
    //Para postear/crear un nuevo juego y guardarlo en la DB
    const videogame = req.body
    return Videogame.create({
        ...videogame,
        include: Genre,
        id: uuidv4()
    })
    .then((videogames) => res.json(videogames))
    .catch((error) => next(error))
    //res.json('hola')
}
// function getVideogameById(req, res, next) {
//     //Para obtener un juego por id
//     const id = req.params.id
//     return Videogame.findByPk(id)
//     .then((videogame) => res.send(videogame))
//     .catch((error) => next(error))
// }

module.exports = {
    //getVideogameById,
    addVideogame
}