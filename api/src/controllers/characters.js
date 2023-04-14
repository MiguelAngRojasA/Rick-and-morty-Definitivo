const axios = require("axios");
require("dotenv").config({ path: "./src/.env" }); //con esto se puede acceder al archivo env y aca ya estamos con un objeto llamado process
const URL = process.env.API_URL;
const STATUS_OK = 200;
const STATUS_ERROR = 400;

function getCharById(req, res) {
  const id = req.params.id;
  //console.log("este es el id que recibo--------->" + id);

  axios
    .get(`${URL}${id}`)
    .then((data) => {
      const character = {
        id: data.data.id,
        name: data.data.name,
        gender: data.data.gender,
        species: data.data.species,       
        image: data.data.image,
        status: data.data.status,
        
        
      };
      res.status(STATUS_OK).json(character);
    })
    .catch((error) => {
      return res.status(STATUS_ERROR).json({ message: error.message });
    });
}


function getCharDetail(req, res) {
  const id = req.params.id;

  axios
    .get(`${URL}${id}`)
    .then((data) => {
      const character = {
        id: data.data.id,
        name: data.data.name,
        gender: data.data.gender,
        species: data.data.species,
        origin: data.data.origin?.name,
        image: data.data.image,
        status: data.data.status,
        location:data.data.location.name
      };
      res.status(STATUS_OK).json(character);
    })
    .catch((error) => {
      return res.status(STATUS_ERROR).json({ message: error.message });
    });
}

function getAllChar(req, res) {  
    
  axios
    .get(`${URL}`)
    .then((response) => {
      const characters = response.data.results.map((characterData) => {
        const character = {
          id: characterData.id,
          name: characterData.name,
          gender: characterData.gender,
          species: characterData.species,
          origin: characterData.origin?.name,
          image: characterData.image,
          status: characterData.status,
        };
        return character;
      });
      res.status(STATUS_OK).json(characters);
    })
    .catch((error) => {
      return res.status(STATUS_ERROR).json({ message: error.message });
    });
}


module.exports = {
  getCharById,
  getCharDetail,
  getAllChar
  
}

// function getCharacterId(req, res, id) {
//   axios
//     .get(`${URL}/${id}`)
//     .then((v) => v.data)
//     .then((ch) => {
//       console.log(ch);
//       const character = {
//         id: ch.id,
//         name: ch.name,
//         gender: ch.gender,
//         species: ch.species,
//         origin: ch.origin?.name,
//         image: ch.image,
//         status: ch.status,
//       };
//       res
//         .writeHead(200, { "Content-type": "application/json" })
//         .end(JSON.stringify(character));
//     });
// }

// function getDetailId(req, res, id) {
//   axios
//     .get(`https://rickandmortyapi.com/api/character/${id}`)
//     .then((v) => v.data)
//     .then((ch) => {
//       console.log(ch);
//       const character = {
//         id: ch.id,
//         name: ch.name,
//         gender: ch.gender,
//         species: ch.species,
//         origin: ch.origin?.name,
//         image: ch.image,
//         status: ch.status,
//         location: ch.location.name,
//       };
//       res
//         .writeHead(200, { "Content-type": "application/json" })
//         .end(JSON.stringify(character));
//     });
// }


// const id  = req.params.id;
//   console.log("este es el id que recibo--------->" + id)
//   try {
//     axios.get(`${URL}${id}`).then(({ data }) => {
//       if (data) {
//         const character = {
//           id: data.id,
//           name: data.name,
//           gender: data.gender,
//           species: data.species,
//           origin: data.origin?.name,
//           image: data.image,
//           status: data.status,
//         };

//         return res.status(STATUS_OK).json(character);
//       }
//       return res.status(STATUS_ERROR).json({ message: "Character not found" });
//     });
//   } catch (error) {
//     return res.status(STATUS_ERROR).json({ message: error.message });
//   }


