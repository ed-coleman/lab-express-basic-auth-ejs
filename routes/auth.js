const { route } = require("../app");
const User = require("../models/User.model")
const router = require("express").Router();
const bcrypt = require('bcryptjs')

router.get("/signup", (req, res) => {
    res.render("signup");
  });

  router.get("/login", (req, res) => {
    res.render("login");
  });
  
  router.post('/signup', async (req, res, next) => {
    console.log(req.body)
    const body  = {...req.body}
    const salt = bcrypt.genSaltSync(13)
    const passswordHash = bcrypt.hashSync(body.password, salt)
    console.log(passswordHash)
    delete body.password
    body.passswordHash = passswordHash
    await User.create(body)
    res.send(body)
    })

    module.exports = router;