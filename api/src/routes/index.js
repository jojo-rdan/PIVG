const { Router } = require('express');
const router = Router();


//Me traigo mis rutas
const VideogamesRoutes = require('./videogames')
const GenresRoutes = require('./genres')
const VideogameRoute = require('./videogame')


// Configurar los routers
router.use('/videogames', VideogamesRoutes)
router.use('/genres', GenresRoutes)
router.use('/videogame', VideogameRoute)


module.exports = router;
