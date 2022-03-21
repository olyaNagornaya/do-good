const express = require("express");
const router = express.Router();
const { User, Item, Category, Taken } = require("../db/models");

router.get('/', async (req, res) => {
  const Items = await Item.findAll({include: [Category, User]});
  console.log('IIIITTTTTTEEEE', Items);
  res.json(Items)
})

router.get('/takens', async (req, res) => {
  const Takens = await Taken.findAll();
  console.log(Takens);
  res.json(Takens)
})

router.get('/categories', async (req, res) => {
  const Categories = await Category.findAll();
  console.log(Categories);
  res.json(Categories)
})

module.exports = router;
