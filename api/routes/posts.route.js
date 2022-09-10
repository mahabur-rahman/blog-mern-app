const PostModel = require("../models/Post.model");

const router = require("express").Router();

// CREATE A POST
router.post("/", async (req, res) => {
  const newPost = new PostModel(req.body);

  try {
    const savedPost = await newPost.save();
    return res.status(200).json(savedPost);
  } catch (err) {
    return res.status(500).json(err);
  }
});

// UPDATE POST
router.put("/:id", async (req, res) => {
  try {
    const post = await PostModel.findById(req.params.id);
  } catch (err) {
    return res.status(500).json(err);
  }
});

// export
module.exports = router;
