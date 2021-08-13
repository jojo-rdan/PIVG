const {Videogame, Genre} = require('../db');

async function addVideogame(req, res) { 
    let {
        name,
        image,
        description,
        release,
        rating,
        platforms,
        genres
    } = req.body

    let createdVideogame = await Videogame.create({
        name,
        image,
        description,
        release,
        rating,
        platforms,
        genres
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