const express = require("express");
const app = express();

// config env
const dotenv = require("dotenv");
dotenv.config();

// listen app
app.listen(5000, () => {
  console.log(`Server is running..`);
});
