const mongoose = require("mongoose");

// PostSchema
const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },

    desc: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: false,
    },
    username: {
      type: String,
      required: true,
    },

    categories: {
      type: Array,
      required: false,
    },
  },
  { timestamps: true }
);

// create a collection | Model
const PostModel = mongoose.model("Post", PostSchema);

module.exports = PostModel;
