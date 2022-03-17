const express = require("express");
const router = express.Router();
const sha256 = require('sha256')
const { User, Item, Category } = require("../db/models");
const { checkUser } = require("../middlewares/allMiddleware");


// РЕГИСТРАЦИЯ
//users/signup
router.post('/signup', async (req, res ) => {
   try {
      const checkUser = await User.findOne({ where: { email: req.body.email } })
      if (checkUser) {
         res.sendStatus(555);
         // res.json(555);
      }
      else {
         const { name, email } = req.body
         const password = sha256(req.body.password);
         const user = await User.create({ name, email, password });
         // console.log(user, 'ЧТО ТУТ??');
         req.session.userId = user.id;
         req.session.userName = user.name;
         req.session.Email = user.email;
         res.json(user.email)
      }
   } catch (error) {
      console.log(error);
   }

})



//АВТОРИЗАЦИЯ ВХОД
router.post('/signin', async (req, res) => {
   const { email } = req.body;
   const password = sha256(req.body.password);
   try {
      const checkUser = await User.findOne({ where: { email } })
      if (checkUser) {
         if (checkUser.password === password) {
            req.session.userId = checkUser.id;
            req.session.userName = checkUser.name;
            req.session.Email = checkUser.email;
            res.json(checkUser);
         } else {
            res.sendStatus(555);
         }
      } else {
         res.sendStatus(554);
      }
   } catch (error) {
      console.log(error);
   }
});
















module.exports = router;
