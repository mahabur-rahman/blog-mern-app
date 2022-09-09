const router = require("express").Router();
const bcrypt = require("bcrypt");
const UserModel = require("../models/User.model");
const PostModel = require("../models/Post.model");

// UPDATE
router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);

      req.body.password = await bcrypt.hash(req.body.password, salt);
    }

    try {
      const updateUser = await UserModel.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );

      return res.status(200).json(updateUser);
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    return res.status(401).json("You can update only your account!");
  }
});

// DELETE
router.delete("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    try {
      const user = await UserModel.findById(req.params.id);

      try {
        await PostModel.deleteMany({ username: user.username });
        await UserModel.findByIdAndDelete(req.params.id);

        return res.status(200).json("user has been deleted...");
      } catch (err) {
        return res.status(500).json(err);
      }
      console.log(user);
    } catch (err) {
      return res.status(500).json("user not found!");
    }
  } else {
    return res.status(401).json("You can delete only your account!");
  }
});

// export
module.exports = router;
