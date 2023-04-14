const {Router} = require('express');
const router = Router();

const{postFav, deleteFav}= require("../controllers/favorites")
router.post("/",postFav)
router.delete("/:id",deleteFav)
module.exports = router