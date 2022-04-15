const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      max: 50,
      sparse: true,
    },
    password:{
        type: String,
    },
    googleId: {
      type: String,
    },
    profilePicture: {
      type: String,
      default:
        "https://c-engage.com/wp-content/uploads/2019/09/member-placeholder-500px-1024x1024.jpg",
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);