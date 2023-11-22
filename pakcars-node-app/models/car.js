const mongoose = require("mongoose");

const carSchema = new mongoose.Schema(
  {
    // CarId: { type: String, required: true },
    ownerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    make: { type: String, required: true },
    year: { type: Number, required: true },
    price: { type: Number, required: true },
    transmission: {
      type: String,
      required: true,
      enum: ["Auto", "Manual"],
    },
    location: { type: String, required: true },
    brandId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Brand",
      required: true,
    },
    isSold: { type: Boolean, default: false },
    engine: { type: String, required: true },
    model: { type: String, required: true },
    fuelType: {
      type: String,
      required: true,
      enum: ["Petrol", "Diesel"],
    },
    isActive: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);

const Car = mongoose.model("Car", carSchema);

module.exports = Car;
