const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema(
  {
    // ProfileId: { type: String, required: true },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    fullName: { type: String, required: true },
    gender: { type: String, enum: ["Male", "Female"] },
    city: { type: String },
    dob: { type: Date },
    isActive: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);

const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;
