/* 
  This file contains the schema definition for the feature model.
*/
const mongoose = require("mongoose");

const featureSchema = new mongoose.Schema(
  {
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
