const {Videogame, Genre} = require('../db');
const { default: axios } = require("axios");
const {myApiKey} = require('../utils/config');

const getVideogameById = async (req, res) => {
    //Para obtener todos los juegos de la API
    if(req.params.id){
        const dbDetailGame = await Videogame.findByPk(req.params.id,
            {
            attributes: { exclude: ['createdAt' , 'updatedAt']},
            include: {
                model: Genre,
                attributes: ['name'],
                through: {attributes: []}
            },
        })
        .catch(() => console.log('No está en la base de datos'))
        if(dbDetailGame) return res.status(200).send(dbDetailGame)


    axios.get(`https://api.rawg.io/api/games/${req.params.id}?key=${myApiKey}`)
    .then((response) => {
        let totalGame = response.data;
        if(totalGame){
            let totalGameDetail = {
                id: totalGame.id,
                name: totalGame.name,
                image: totalGame.background_image,
                description: totalGame.description,
                genres: totalGame.genres.map(el => el.name),
                released: totalGame.released,
                rating: totalGame.rating,
                platforms: totalGame.platforms.map(el => el.platform.name),
            }
            return res.status(200).send(totalGameDetail)
        }
    })
    .catch(() => res.status(404).send('No se encontró el juego.'))
    }
}
// async function getVideogameById (req, res) {
//    const videogamesTotal = await allVideogamesById();
//    if(req.params.id){
//        let videogameId = await videogamesTotal.filter(i => i.id === id)
//        videogameId.length ?
//        res.status(200).json(videogameId) :
//        res.status(404).send('No se encontró el videojuego.')
//    }

// }
module.exports = {
    getVideogameById
}