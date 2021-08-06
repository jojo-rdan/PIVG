//Exclusivamente con la función de data que llama a la API
const { default: axios } = require('axios');
require('dotenv').config();
const {myApiKey} = require('../utils/config');


const data = async () =>{
    const arr = await axios.get(`https://api.rawg.io/api/games?key=${myApiKey}`)
    console.log(arr.data.results)
    return arr.data.results;
}

module.exports = data;