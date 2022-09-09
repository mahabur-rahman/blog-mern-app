const mongoose = require("mongoose");

// CategorySchema
const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

// create a collection | Model
const CategoryModel = mongoose.model("Category", CategorySchema);

module.exports = CategoryModel;
