const express = require("express");
const app = express();
const colors = require("colors");

// config env
const dotenv = require("dotenv");
dotenv.config();

// connected to db
const connectedDB = require("./db/connect");
connectedDB();

// listen app
app.listen(5000, () => {
  console.log(`Server is running...`);
});
