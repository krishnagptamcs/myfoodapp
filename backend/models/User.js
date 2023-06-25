const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  photo:String,
  googleId: {
    type: String,
    required: true,
    unique:true,
  },
  role: {
    type: "String",
    enum: ["admin", "user"],
    default: "user",
  },

  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("User", UserSchema);
