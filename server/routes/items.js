const express = require("express");
const router = express.Router();
const { User, Item, Category, Taken } = require("../db/models");
const { convertCategoryId } = require("../src/controller.js");
const { upload } = require("../middlewares/allMiddleware");
const helper = require("../src/helper");

router.get("/", async (req, res) => {
  const Items = await Item.findAll({ include: [Category, User] });
  console.log("IIIITTTTTTEEEE", Items);
  res.json(Items);
});


router.get("/takens", async (req, res) => {
  const Takens = await Taken.findAll();
  console.log("takens===========",Takens);
  res.json(Takens);
});

router.get("/categories", async (req, res) => {
  const Categories = await Category.findAll();
  console.log(Categories);
  res.json(Categories);
});

router.post('/:id' ,async (req, res) => {
  const data = await Item.update({available: false},{where: {id: req.params.id}})
  console.log('data-----', data)
  res.status(200)

})

router.post("/addgood", upload.single("file"), async (req, res) => {
  console.log(">>>>>>>>>>>>>>>>>>>>>>");
  // console.log(req.file);
  // console.log(req.body);

  console.log("session --------", req.session.userId);

  const img = req.file ? `/img/${req.file.originalname}` : null;

  const {
    title,
    description,
    category,
    geolocation,
    city,
    user_id,
    validUntil,
  } = req.body;

  const category_id = convertCategoryId(category);

  const x = await helper({ geolocation, city });
  console.log(x.coordinate);

  const objForDB = {
    title,
    img,
    category_id,
    user_id,
    description,
    available: true,
    city: geolocation,
    address: city,
    coordinatesX: x.coordinate[0],
    coordinatesY: x.coordinate[1],
    validUntil,
  };

  // console.log(req.body);
  // console.log(`Объект, летящий в базу`, objForDB);
  const ourPost = await Item.create(objForDB);

  res.json(ourPost);
});

module.exports = router;
