const Profile = require("../models/profile");

// Controller function to create a new profile
const createProfile = async (req, res) => {
  try {
    const newProfile = await Profile.create(req.body);
    res.status(201).json(newProfile);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Controller function to get all profiles
const getAllProfiles = async (req, res) => {
  try {
    const profiles = await Profile.find();
    res.status(200).json(profiles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Controller function to get a specific profile by userId
const getProfileByUserId = async (req, res) => {
  try {
    const profile = await Profile.findOne({ userId: req.params.userId });
    if (!profile) {
      return res.status(404).json({ error: "Profile not found" });
    }
    res.status(200).json(profile);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Controller function to update a profile by userId
const updateProfileByUserId = async (req, res) => {
  try {
    console.log("Profile Update request body");
    console.log(req.body);

    const updatedProfile = await Profile.findOneAndUpdate(
      { userId: req.params.userId },
      req.body,
      { new: true }
    );
    if (!updatedProfile) {
      return res.status(404).json({ error: "Profile not found" });
    }
    console.log("Profile Update");
    console.log(updatedProfile);

    res.status(200).json(updatedProfile);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Controller function to delete a profile by userId
const deleteProfileByUserId = async (req, res) => {
  try {
    const deletedProfile = await Profile.findOneAndDelete({
      userId: req.params.userId,
    });
    if (!deletedProfile) {
      return res.status(404).json({ error: "Profile not found" });
    }
    res.status(200).json({ message: "Profile deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  createProfile,
  getAllProfiles,
  getProfileByUserId,
  updateProfileByUserId,
  deleteProfileByUserId,
};
