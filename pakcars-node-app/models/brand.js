/* 
  This file contains the schema for the brand of the car in the database.
*/
const mongoose = require("mongoose");

const brandSchema = new mongoose.Schema(
  {
    brandName: { type: String, required: true },
    founderYear: { type: Number, required: true },
    description: { type: String, required: true },
    img: { type: String },
    isActive: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);

const Brand = mongoose.model("Brand", brandSchema);

module.exports = Brand;
