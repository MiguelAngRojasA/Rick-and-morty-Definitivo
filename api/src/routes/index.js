const express = require("express");
const router = express.Router();
const characters = require("./character.js");
const favorites = require("./favorites.js");
const login = require("./login.js");

router.use("/character", characters);
router.use("/favorite", favorites);
router.use("/login", login);

module.exports = router;
