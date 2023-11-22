const mongoose = require("mongoose");

const brandSchema = new mongoose.Schema(
  {
    //   BrandId: { type: String, required: true },
    brandName: { type: String, required: true },
    founderYear: { type: Number, required: true },
    description: { type: String, required: true },
    isActive: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);

const Brand = mongoose.model("Brand", brandSchema);

module.exports = Brand;
