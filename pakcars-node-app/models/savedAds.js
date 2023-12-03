/* 
  This file contains the schema definition for the savedAds collection in the database.
*/
const mongoose = require("mongoose");

const savedAdSchema = new mongoose.Schema(
  {
    adId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Ad",
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

const SavedAd = mongoose.model("SavedAd", savedAdSchema);

module.exports = SavedAd;
