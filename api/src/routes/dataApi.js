//Exclusivamente con la función de data que llama a la API
const { default: axios } = require('axios');
require('dotenv').config();
const {MY_API_KEY} = process.env;


const data = async () =>{
    const arr = await axios.get(`https://api.rawg.io/api/games?key=${MY_API_KEY}`)
    console.log(arr.data.results)
    return arr.data.results;
}

module.exports = data;