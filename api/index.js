const express = require("express");
const app = express();
const colors = require("colors");

// ROUTE
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users.route");
const postRoute = require("./routes/posts.route");

// config env
const dotenv = require("dotenv");
dotenv.config();

// connected to db
const connectedDB = require("./db/connect");
connectedDB();

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);

// listen app
app.listen(5000, () => {
  console.log(`Server is running...`);
});
