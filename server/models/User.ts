const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name:{
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      max: 50,
      sparse: true,
    },
    googleId: {
      type: String,
      required:true
    },
    profilePicture: {
      type: String,
      default:
        "https://c-engage.com/wp-content/uploads/2019/09/member-placeholder-500px-1024x1024.jpg",
    }
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);