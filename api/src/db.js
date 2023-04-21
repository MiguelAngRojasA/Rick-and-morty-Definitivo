const { Sequelize, Op } = require('sequelize');
const users = require("./models/User")
const favorites = require("./models/Favorite")


const sequelize = new Sequelize(
   "postgres://postgres:bymiguel123mp@localhost:5432/rickandmorty",
   { logging: false , native :false }
 );
//Ejercicio 5
 users(sequelize);
 favorites(sequelize);


//conection

const {User, Favorite} = sequelize.models

User.belongsToMany(Favorite, { through: 'UserFavorite'})
Favorite.belongsToMany(User, { through: 'UserFavorite'}) // aca se crea la tabla intermedia 

 module.export ={
    ...sequelize.models,
    conn: sequelize
 }