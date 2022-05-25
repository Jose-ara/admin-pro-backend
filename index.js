const express = require('express');
require('dotenv').config();

const cors = require('cors');
const {dbConnection} = require('./database/config');

//crear servicio de express
const app = express();

//base de datos
dbConnection();

//configurar cors
app.use(cors());

console.log(process.env)

//rutas
//pass xLqwNv33HfWAekJB
//user Ara

app.get( '/', (req, res) => {
    res.json({
        ok: true,
        msj: "Hello wordl"
    })
})


app.listen(process.env.PORT, () => {
    console.log('Está corriendo el servicio' + process.env.PORT)
})