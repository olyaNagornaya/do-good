const express = require("express");
const router = express.Router();
const { User, Item, Category } = require("../db/models");
const { checkUser } = require("../middlewares/allMiddleware");


// Handler на регистрацию
router.post(async (req, res) => {
  console.log('Ручка на регистрацию');
  const { name, email, password } = req.body;
 
  try {
    const user = await User.create({
      name,
      email,
      password,
    });

    req.session.userName = user.name;
    req.session.userEmail = user.email;
    req.session.userId = user.id;

    // Что-то отправить в ответ?
    // res.json({text:'text'})
  
  } catch (error) {
      console.log(error);
  }
});

// Handler на вход в учетную запись
router.post(async (req, res) => {
  console.log('Ручка на вход в учетную запись');
  console.log(req.body);
  const { email, password } = req.body;
});

// Handler на выход из аккаунта
router.get("/logout", (req, res) => {
  req.session.destroy();
  res.clearCookie("userCookie");
  res.redirect("/");
});


module.exports = router;
