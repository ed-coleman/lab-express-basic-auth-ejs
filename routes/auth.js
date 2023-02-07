const { route } = require("../app");
const User = require("../models/User.model")
const router = require("express").Router();
const bcrypt = require('bcryptjs')
const { isLoggedIn, isLoggedOut } = require('../middleware/route-guard.js')

router.get("/signup", (req, res) => {
    res.render("signup");
  });

  router.get("/login", (req, res) => {
    res.render("login");npm 
  });
  
  /*router.get("/profile", (req, res) => {
    res.render("profile");
  });*/


  router.post('/signup', async (req, res, next) => {
    console.log(req.body)
    const body  = {...req.body}
    const salt = bcrypt.genSaltSync(13)
    const passwordHash = bcrypt.hashSync(body.password, salt)
    console.log(passwordHash)
    delete body.password
    body.passwordHash = passwordHash
    await User.create(body)
    res.render('login')
    console.log("you added a user")
    })

    router.post('/login', async (req, res,) => {
      console.log('SESSION ==>', req.session)
      const body = req.body

      const userMatch = await User.find ({ username: body.username })
      console.log(userMatch)
      if (userMatch.length) {
        //User found
        const user = userMatch[0]

        if (bcrypt.compareSync(body.password, user.passwordHash)) {
          //Correct Password
          console.log(user)
          res.render('profile')
        } else {
          console.log('incorrect password')
        }
      } else {
        console.log('user not found')
      }
    })

    router.get('/profile', isLoggedIn, (req, res) => {
      console.log('SESSION =====> ', req.session)

      res.render(profile, { user: req.session.user })
    
    })



    module.exports = router;