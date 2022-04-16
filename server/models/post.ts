const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
      email: {
          type: String,
          required: true
      },
      name:{
          type: String,
          required: true
      },
      image:{
          type: String,
      },
      category: {
          type: String,
          required: true
      },
      address:{
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
      },
      isSold:{
         type: Boolean
      },
      Bought_on:{
          type: Date
      },
      service_name:{
          type: String
      },
      Buyer_email: {
          type: String
      },
      Buyer_name: {
          type: String
      }
  }
);

module.exports = mongoose.model("Post", PostSchema);