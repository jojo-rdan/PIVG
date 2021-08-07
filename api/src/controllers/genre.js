const {Videogame, Genre} = require('../db')
const { default: axios } = require("axios");
const { where } = require('sequelize');
const {myApiKey} = require('../utils/config');


async function getAllGenres(req, res, next){
    try {
        const allGenres = Genre.findAll()
        if(!allGenres.length){
          const apiGenres = await axios.get(`https://api.rawg.io/api/genres?key=${myApiKey}`)
          const genresData = apiGenres.data.results;
          const genresMap = genresData.map(g => {
              name: g.name
              id: g.id
          })
          //const final = Genre.findOrCreate(genresMap,{where:{name: genresData.name, id: genresData.id}})
          const final = Genre.bulkCreate(genresMap,{where:{name: genresData.name, id: genresData.id}})
          res.json(final)
        }
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getAllGenres
}