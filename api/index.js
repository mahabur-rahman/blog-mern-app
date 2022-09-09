const express = require("express");
const app = express();
const colors = require("colors");

// ROUTE
const authRoute = require("./routes/auth");

// config env
const dotenv = require("dotenv");
dotenv.config();

// connected to db
const connectedDB = require("./db/connect");
connectedDB();

app.use(express.json());
app.use("/api/auth", authRoute);

// listen app
app.listen(5000, () => {
  console.log(`Server is running...`);
});
