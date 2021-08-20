const {Videogame, Genre} = require('../db');
const { default: axios } = require("axios");
const {myApiKey} = require('../utils/config');

const apiVideogames = async () => { ////FALTA AGREGAR LOS OTROS LLAMADOS Y ANDAR EL DBVIDEOGAME
    //Para obtener todos los juegos de la API
    const arr = await axios.get(`https://api.rawg.io/api/games?key=${myApiKey}&page_size=40`)
    const arr2 = await axios.get(`https://api.rawg.io/api/games?key=${myApiKey}&page=2&page_size=40`)
    const arr3 = await axios.get(`https://api.rawg.io/api/games?key=${myApiKey}&page=3&page_size=40`)

    //Tomo la info que tienen adentro
    const arrData = arr.data.results;
    const arrData2 = arr2.data.results;
    const arrData3 = arr3.data.results;

    //Para concatenar los llamados de la API
    const totalGames = await arrData.concat(arrData2, arrData3)
    return totalGames;
}
const dbVideogames = async () => {
    return await Videogame.findAll({
        attributes: { exclude: ['createdAt' , 'updatedAt']},
        include: {
            model: Genre,
            attributes: ['name'],
            through: {attributes: []}
        },
    })
}
const allVideogames = async () => {
    const apiGames = await apiVideogames();
    const dbGames = await dbVideogames();
    const infoTotal = apiGames.concat(dbGames);
    const filteredInfoTotal = infoTotal.map(el => {
        return {
            id: el.id,
            name: el.name,
            image: el.background_image,
            genres: el.genres.map(g => g.name),
            rating: el.rating,
            released: el.released,
            createInDb: el.createInDb
        }
    })
    return filteredInfoTotal;
}
const getAllVideogames = async (req, res) => {
    const name = req.query.name;
    let videogamesTotal = await allVideogames();
    if(name){
        videogameName = await videogamesTotal.filter(vg => vg.name.toLowerCase().includes(name.toLowerCase()))
        videogameName.length ?
        res.status(200).send(videogameName) :
        res.status(404).send('No está el videojuego.')
    } else {
        res.status(200).send(videogamesTotal)
    }
}

module.exports = {
    getAllVideogames,
}