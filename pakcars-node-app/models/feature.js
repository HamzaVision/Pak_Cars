const mongoose = require("mongoose");

const featureSchema = new mongoose.Schema(
  {
    // FeatureId: { type: String, required: true },
    carId: { type: String, required: true },
    featureName: { type: String, required: true },
    featureDescription: { type: String, required: true },
    isActive: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);

const Feature = mongoose.model("Feature", featureSchema);

module.exports = Feature;
