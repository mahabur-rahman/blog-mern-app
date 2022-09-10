const router = require("express").Router();
const CategoryModel = require("../models/Category.model");

// CREATE CATEGORY | POST

router.post("/", async (req, res) => {
  const newCat = new CategoryModel(req.body);

  try {
    const savedCat = await newCat.save();

    return res.status(200).json(savedCat);
  } catch (err) {
    return res.status(500).json(err);
  }
});

// GET ALL CATEGORY
router.get("/", async (req, res) => {
  try {
    const cats = await CategoryModel.find();

    return res.status(200).json(cats);
  } catch (err) {
    return res.status(500).json(err);
  }
});

// exports
module.exports = router;
