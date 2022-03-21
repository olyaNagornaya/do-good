const express = require("express");
const router = express.Router();
const { User, Item, Category, Taken } = require("../db/models");
const { convertCategoryId } = require("../src/controller.js");

router.get('/', async (req, res) => {
  const Items = await Item.findAll({include: [Category, User]});
  console.log('IIIITTTTTTEEEE', Items);
  res.json(Items)
})

router.get("/takens", async (req, res) => {
  const Takens = await Taken.findAll();
  console.log(Takens);
  res.json(Takens);
});

router.get("/categories", async (req, res) => {
  const Categories = await Category.findAll();
  console.log(Categories);
  res.json(Categories);
});

router.post("/addgood", async (req, res) => {
  const { title, description, category, geolocation, city, img } = req.body;

  const category_id = convertCategoryId(category);

  const objForDB = {
    title,
    img,
    category_id,
    user_id: req.session.userId,
    description,
    available: true,
  };

  await Item.create(objForDB);

  res.status(200);
});

module.exports = router;
