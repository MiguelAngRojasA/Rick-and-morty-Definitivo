const express = require('express');
const app = express();
const router = require("./routes/index")
const urlendcoded = express.urlencoded({extended:false}) //para decirle que los datos que vamos a trabajar son sencillos(no son arrays anidados son de un formulario ) para poder ver datos de un formulario
const logger = require("morgan")

// middleware
app.use(express.json())


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); //Autorizo recibir solicitudes de este dominio
    res.header('Access-Control-Allow-Credentials', true); //Autorizo recibir solicitudes que incluyan el encabezado con credenciales
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept'); //Autorizo recibir solicitudes con dichos hedears
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE'); //Autorizo las solicitudes tipo GET, POST, OPTIONS, PUT y DELETE.
    next();
});

app.use(logger("dev"));

app.use("/rickandmorty", router); // esta es para que siempre aparezca las routes

app.get ("/",(req,res)=>{
    res.status(200).json({message:"My first server in express"})
})


module.exports = app;
