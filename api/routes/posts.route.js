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

    if (post.username === req.body.username) {
      try {
        const updatedPost = await PostModel.findByIdAndUpdate(
          req.params.id,
          { $set: req.body },
          { new: true }
        );

        return res.status(200).json(updatedPost);
      } catch (err) {
        return res.status(500).json(err);
      }
    }
  } catch (err) {
    return res.status(500).json(err);
  }
});

// export
module.exports = router;
