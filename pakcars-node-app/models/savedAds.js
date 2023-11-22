const mongoose = require("mongoose");

const savedAdsSchema = new mongoose.Schema(
  {
    //   SavedAdId: { type: String, required: true },
    carId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Car",
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    isActive: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);

const SavedAds = mongoose.model("SavedAds", savedAdsSchema);

module.exports = SavedAds;
