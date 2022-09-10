const express = require("express");
const app = express();
const colors = require("colors");
// upload img
const multer = require("multer");

// ROUTE
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users.route");
const postRoute = require("./routes/posts.route");
const categoryRoute = require("./routes/category.route");

// config env
const dotenv = require("dotenv");
dotenv.config();

// connected to db
const connectedDB = require("./db/connect");
connectedDB();

// ############ UPLOAD IMG ############

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },

  filename: (req, file, cb) => {
    // cb(null, "pc.jpg"); // Only for test
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });

app.post("/api/upload", upload.single("file"), (req, res) => {
  return res.status(200).json("file has been uploaded..");
});

// ########################

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);

// listen app
app.listen(5000, () => {
  console.log(`Server is running...`);
});
