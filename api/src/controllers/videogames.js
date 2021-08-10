const {Videogame, Genre} = require('../db');
const { default: axios } = require("axios");
const {myApiKey} = require('../utils/config');

async function getAllVideogames(req, res, next) { //FALTA AGREGAR LOS OTROS LLAMADOS Y ANDAR EL DBVIDEOGAME
    //Para obtener todos los juegos de la DB
    const arr = await axios.get(`https://api.rawg.io/api/games?key=${myApiKey}&page_size=40`)
    const arr2 = await axios.get(`https://api.rawg.io/api/games?key=${myApiKey}&page=2&page_size=40`)
    const arr3 = await axios.get(`https://api.rawg.io/api/games?key=${myApiKey}&page=3&page_size=40`)

    const arrData = arr.data.results;
    const arrData2 = arr2.data.results;
    const arrData3 = arr3.data.results;
    const dbVideogames = await Videogame.findAll({
        include: Genre
    })
    console.log(dbVideogames)
    const totalGames = arrData.concat(arrData2, arrData3, dbVideogames)
    const filteredGames = totalGames.map(v => {
        return {
        name: v.name,
        image: v.background_image,
        genres: v.genres.map((g) => g.name)}
    })
    // .catch((error) => next(error))
    res.json(filteredGames)
}

module.exports = {
    getAllVideogames
}