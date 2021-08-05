const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

//Me traigo mis tablas para poder trabajar sobre ellas:
const {Videogame, Genre, VideogameGenre} = require('../db.js')

//Me traigo OP de sequelize para poder usar sus operadores
const {Op} = require('sequelize');
const { default: axios } = require('axios');
const router = Router();

//Me traigo las rutas de videogames y genres
const VideogamesRoutes = require('./videogames')
const GenresRoutes = require('./genres')

router.use('/videogames', VideogamesRoutes)
router.use('/genres', GenresRoutes)

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
