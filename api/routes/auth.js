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

router.post("/login", async (req, res) => {
  try {
    const user = await UserModel.findOne({ username: req.body.username });

    !user && res.status(400).json("Wrong credentials!");

    const validatedPass = await bcrypt.compare(
      req.body.password,
      user.password
    );

    !validatedPass && res.status(400).json("Wrong Credentials!");

    const { password, ...others } = user._doc;

    return res.status(200).json(others);

    console.log(user);
  } catch (err) {
    return res.status(500).json(err);
  }
});

// export
module.exports = router;
