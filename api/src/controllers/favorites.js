
require('dotenv').config({ path: "./src/.env" }) //con esto se puede acceder al archivo env y aca ya estamos con un objeto llamado process

const STATUS_OK = 200;
const STATUS_ERROR = 404;
let myFavorites=[]


function postFav(req,res){
    try {  const {id,name,status,species,gender,origin,image}= req.body
    console.log(id)
    
    if(!id ||!name||!status ){
        return res.status(STATUS_ERROR).json({ message: "missing data" });  
    }

    const character = {id,name,status,species,gender,origin,image}
    myFavorites.push(character)
    return res.status(STATUS_OK).json(myFavorites); 
        
    } catch (error) {
        return res.status(STATUS_ERROR).json({ message: error });  
        
    }
   
}


function deleteFav(req, res) {
    const { id } = req.params; //ojo este params lo lee como un string 
    //console.log("este es el id" +id )
    try {
      if (!id) {
        return res.status(STATUS_ERROR).json({ message: "id not found" });
      }
      console.log ("el array al que le hago el filters es "+ myFavorites)
      console.log(JSON.stringify(myFavorites));
      const newFavorites = myFavorites.filter((ch) => ch.id != id ); //se le quito el Number por que compararia string con numero y no funcionaria 
      console.log ("el nuevo array es este"+ newFavorites)
      console.log(JSON.stringify(newFavorites));
      myFavorites = newFavorites;
      return res.status(STATUS_OK).json(myFavorites);
    } catch (error) {
      return res.status(STATUS_ERROR).json({ message: error });
    }
  }

    



  module.exports = {
    postFav,
    deleteFav
  }

  //||!species||!gender||!origin||!image 
  //,species,gender,origin,image 