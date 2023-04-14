const {Router} = require('express');
const router = Router();

const {getCharById,getCharDetail,getAllChar} = require("../controllers/characters.js")

router.get("/all",getAllChar)
router.get("/detail/:id",getCharDetail)
router.get("/:id",getCharById)






module.exports = router