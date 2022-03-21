const { application } = require("express");
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
         console.log('зашёл в ошибку?');
         res.json({haveuser: 'have'});
      }
      else {
         const { name, email, surname, telephone, city, img } = req.body
         const password = sha256(req.body.password);
         const user = await User.create({ name, email, password, surname, telephone, city, img });
         req.session.userId = user.id;
         req.session.userName = user.name;
         req.session.Email = user.email;
            res.json({user:user.id, useremail:user.email, username: user.name, surname: user.surname, phone: user.telephone, city: user.city, photo: user.img})
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
            console.log('тут');
            req.session.userId = checkUser.id;
            req.session.userName = checkUser.name;
            req.session.Email = checkUser.email;
            res.json({user: checkUser.id,useremail:checkUser.email,username:checkUser.name});
         } else {
            res.json({wrong:'wrong pass'})
         }
      } else {
         res.json({errLogin:'no!'})
      }
   } catch (error) {
      console.log(error);
   }
});





//Профиль
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
router.get('/profile',async (req, res) => {
   try {
      const name = await User.findByPk(req.session.userId)
      //НАЙДИ ВСЕ ПОСТЫ ГДЕ ВСЕ ПОСТЫ АВТОРА РАВНЫ СЕССИИ ПО ЮЗЕР АЙДИ
      // const data = await Post.findAll({ where: { author_id: req.session.userId } })
         // console.log('name', namee.name);
      console.log("????????????????????", name)
      res.json({user: name.id,username:name.name, useremail:name.email, surname: name.surname, phone: name.telephone, city: name.city, photo: name.img})
   } catch (error) {
      console.log(error);
   }
})




///////УДАЛЕНИЕ ТУТ 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
router.get('/logout',(req, res) => {
   console.log('удали куки ');
   req.session.destroy();
   res.clearCookie('auth');
   res.json({ok:'ok'})

})








module.exports = router;
