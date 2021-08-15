const {Videogame, Genre} = require('../db');

async function addVideogame(req, res) { 
    let {
        name,
        background_image,
        description,
        genres,
        released,
        rating,
        platforms
    } = req.body

    let createdVideogame = await Videogame.create({
        name,
        background_image,
        description,
        genres,
        released,
        rating,
        platforms
    })

    let findGenres = await Promise.all(genres.map(g => {
        return Genre.findByPk(g)
    }))

    createdVideogame.setGenres(findGenres)
    res.send('El videojuego ha sido agregado!')
}

module.exports = {
    addVideogame
}