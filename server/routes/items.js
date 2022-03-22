const express = require("express");
const router = express.Router();
const { User, Item, Category, Taken } = require("../db/models");
const { convertCategoryId } = require("../src/controller.js");
const { upload } = require('../middlewares/allMiddleware');

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

router.post("/addgood", upload.single('file'), async (req, res) => {
  console.log('>>>>>>>>>>>>>>>>>>>>>>');
  // console.log(req.file);
  // console.log(req.body);

  // console.log(req.session);

  const img = req.file ? `/img/${req.file.originalname}` : null;

  const { title, description, category, geolocation, city, user_id, validUntil } = req.body;

  const category_id = convertCategoryId(category);

  const objForDB = {
    title,
    img,
    category_id,
    user_id,
    description,
    address: geolocation,
    available: true,
    city
  };

  console.log(objForDB);
  await Item.create(objForDB);
  res.status(200);
});

module.exports = router;
