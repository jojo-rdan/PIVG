const {Genre} = require('../db')
const { default: axios } = require("axios");
const {myApiKey} = require('../utils/config');


async function getAllGenres(req, res){
    const genres = await axios.get(`https://api.rawg.io/api/genres?key=${myApiKey}`);
    const apiGenres = genres.data.results.map(g => g.name)
    apiGenres.forEach(el => {
        Genre.findOrCreate({
            where: {name: el}
        })
    });
    const allGenres = await Genre.findAll();
    res.send(allGenres)
}

module.exports = {
    getAllGenres
}