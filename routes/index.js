const { route } = require("../app");
const User = require("../models/User.model")
const router = require("express").Router();
const bcrypt = require('bcryptjs')

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});




  /*const body = { ...req.body }

  const salt = bcrypt.genSaltSync(13)
  const passwordHash = bcrypt.hashSync(body.password, salt)
  console.log(passwordHash)
  delete body.password
  body.password = passwordHash

  await User.create(body)
  res.send(body)
  console.log("post was delivered 🥷")
})*/



module.exports = router;
