// const http = require("http");
// const characters = require("./utils/data.js");
//const { getCharacterId, getDetailId } = require("./controllers/characters.js");
const express = require('express');
require('dotenv').config();
const app = require("./app.js");

const PORT = process.env.PORT||3001;

app.listen(PORT, () => {
   console.log('Server raised in port: ' + PORT);
});





