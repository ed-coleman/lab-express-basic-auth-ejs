const { route } = require("../app");
const User = require("../models/User.model")
const router = require("express").Router();
const bcrypt = require('bcryptjs')

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});



module.exports = router;
