require('dotenv').config();

module.exports = {
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    dbHost: process.env.DB_HOST,
    dbPort: process.env.DB_PORT,
    myApiKey: process.env.MY_APY_KEY,
    dbName: process.env.DB_NAME,
    port: process.env.PORT
}