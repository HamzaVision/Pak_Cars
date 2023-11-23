const express = require("express");
const router = express.Router();
const profileController = require("../controllers/profileController");

// Create a profile
router.post("/profiles", profileController.createProfile);

// Get all profiles
router.get("/profiles", profileController.getAllProfiles);

// Get a profile by ID
router.get("/profiles/:userId", profileController.getProfileByUserId);

// update a profile by ID
router.put("/profiles/:userId", profileController.updateProfileByUserId);

// delete a profile by ID
router.delete("/profiles/:userId", profileController.deleteProfileByUserId);

module.exports = router;
