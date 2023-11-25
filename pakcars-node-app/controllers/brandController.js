const Brand = require("../models/brand");

// Controller for handling brand-related operations

// Get all brands
const getAllBrands = async (req, res) => {
  try {
    const brands = await Brand.find();
    res.json(brands);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a specific brand by ID
const getBrandById = async (req, res) => {
  try {
    const brand = await Brand.findById(req.params.id);
    if (brand) {
      res.json(brand);
    } else {
      res.status(404).json({ message: "Brand not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new brand
const createBrand = async (req, res) => {
  try {
    console.log("Brand Create request body", req.body);
    const newBrand = await Brand.create(req.body);
    console.log("Brand Create", newBrand);
    res.status(201).json(newBrand);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  getAllBrands,
  getBrandById,
  createBrand,
};
