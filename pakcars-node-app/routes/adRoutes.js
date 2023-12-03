/*
    This file contains the routes for Ad CRUD operations and
    getting all ads posted by a specific user.
*/
const express = require("express");
const router = express.Router();
const adController = require("../controllers/adController");

// Routes for Ad CRUD operations
router.post("/ads", adController.createAd);
router.get("/ads", adController.getAllAds);
router.get("/ads/:adId", adController.getAdById);
router.put("/ads/:adId", adController.updateAd);
router.delete("/ads/:adId", adController.deleteAd);

// Route to get all ads posted by a specific user
router.get("/ads/user/:userId", adController.getAllAdsByUser);

module.exports = router;
