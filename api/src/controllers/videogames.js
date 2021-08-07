const {Videogame, Genre} = require('../db');
const { default: axios } = require("axios");
const {myApiKey} = require('../utils/config');

async function getAllVideogames(req, res, next) { //FALTA AGREGAR LOS OTROS LLAMADOS Y ANDAR EL DBVIDEOGAME
    //Para obtener todos los juegos de la DB
    const arr = await axios.get(`https://api.rawg.io/api/games?key=${myApiKey}&page_size=40`)
    const arr2 = await axios.get(`https://api.rawg.io/api/games?key=${myApiKey}&page=2&page_size=40`)
    const arr3 = await axios.get(`https://api.rawg.io/api/games?key=${myApiKey}&page=3&page_size=40`)
    //const allCalls = Promise.all([arr, arr2, arr3])
    const arrData = arr.data;
    const apiVideogames = arrData.results;
    //const callsData = allCalls.data.results;
    //const apiVideogames = callsData.results;
    console.log('asasdsad')
    const dbVideogames = await Videogame.findAll({
        include: Genre
    })
    const totalGames = [...apiVideogames, ...dbVideogames]
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