/* 
  This file contains the schema for the car model.
*/
const mongoose = require("mongoose");

const carSchema = new mongoose.Schema(
  {
    registrationCity: { type: String, required: true },
    brandId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Brand",
      required: true,
    },
    model: { type: String, required: true },
    year: { type: Number, required: true },
    fuelAverage: { type: Number, required: true },
    transmission: {
      type: String,
      required: true,
      enum: ["Auto", "Manual", "Semi-Auto"],
    },
    fuelType: {
      type: String,
      required: true,
      enum: ["Petrol", "Diesel", "Electric", "Hybrid"],
    },
    engineCapacity: { type: Number, required: true },
    price: { type: Number, required: true },
    imagePath: { type: String, required: true },
    isActive: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);

const Car = mongoose.model("Car", carSchema);

module.exports = Car;
