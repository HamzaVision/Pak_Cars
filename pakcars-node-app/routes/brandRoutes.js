/*
    This file contains the routes for brand-related operations.
*/
const express = require("express");
const router = express.Router();
const brandController = require("../controllers/brandController");

// Routes for brand-related operations

// Get all brands
router.get("/brands", brandController.getAllBrands);

// Get a specific brand by ID
router.get("/brands/:id", brandController.getBrandById);

// Create a new brand
router.post("/brands", brandController.createBrand);

module.exports = router;
