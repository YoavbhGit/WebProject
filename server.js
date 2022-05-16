const express = require('express')
const dotenv = require('dotenv')
dotenv.config({ path: './public/config/config.env'})
const mydb = require('./public/js/db')
const app = express()
app.use(express.static('public'))
const PORT = process.env.PORT || 3000;


app.get('/', (req, res) => {
    res.sendFile( __dirname + "/public/html/index.html" );
})
app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on http://localhost:${PORT}`)
   })