const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
      user_email: {
          type: String,
          required: true
      },
      name:{
          type: String,
          required: true
      }
      post_photo:{
          type: String,
      },
      category: {
          type: String,
          required: true
      },
      location:{
          type: String,
          required: true
      },
      date: {
          type: Date,
          required: true
      },
      price:{
          type: Number,
          required: true
      },
      description: {
          type: String,
          required: true
      }
  }
);

module.exports = mongoose.model("Post", PostSchema);