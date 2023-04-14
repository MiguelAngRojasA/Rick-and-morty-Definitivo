const {Router} = require('express');
const router = Router();

const {login} = require("../controllers/login.js")

router.use(login)

module.exports = router