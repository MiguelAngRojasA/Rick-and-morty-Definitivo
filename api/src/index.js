const http = require("http");
const characters = require("./utils/data.js");
const { getCharacterId, getDetailId } = require("./controllers/characters.js");
const axios = require("axios");
const PORT = 3001;


http
  .createServer(function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    const url = req.url.split("/");
    const param1 = url[1];
    const param2 = url[2];
    const id = url[3];
    if (param1 === "rickandmorty" && param2 === "characters") {
      return res
        .writeHead(200, { "Content-type": "aplication/json" })
        .end(JSON.stringify(characters));
    }
    if (param1 === "rickandmorty" && param2 === "character") {
      
      return getCharacterId(req, res, id);
    }
    if (param1 === "rickandmorty" && param2 === "detail") {
     
      return getDetailId(req, res, id);
    }
    return res
    .writeHead(404, { "Content-type": "text/plain" })
    .end("Not found");    
n
    
  })
  .listen(PORT, () => {
    console.log("in port http://localhost:3001");
  });


