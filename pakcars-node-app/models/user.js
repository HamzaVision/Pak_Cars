const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    // UserId: { type: String, required: true },
    Username: { type: String, required: true },
    Password: { type: String, required: true },
    Email: { type: String, required: true },
    Role: {
      type: String,
      required: true,
      default: "User",
      enum: ["Admin", "User"],
    },
    IsActive: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
