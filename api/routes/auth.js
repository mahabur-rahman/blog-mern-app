const router = require("express").Router();
const UserModel = require("../models/User.model");
const bcrypt = require("bcrypt");

// REGISTER

router.post("/register", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);

    const newUser = await UserModel({
      username: req.body.username,
      email: req.body.email,
      password: hashedPass,
    });

    const user = await newUser.save();

    return res.status(201).json(user);
  } catch (err) {
    return res.status(500).json(err);
  }
});

// LOGIN

// export
module.exports = router;
