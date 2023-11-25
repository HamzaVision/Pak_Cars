const Ad = require("../models/ad");

// Controller to create a new ad
const createAd = async (req, res) => {
  try {
    console.log("req.body", req.body);
    const ad = await Ad.create(req.body);
    console.log("ad", ad);
    res.status(201).json(ad);
  } catch (error) {
    console.error("Error creating ad:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Controller to get all ads
const getAllAds = async (req, res) => {
  try {
    const ads = await Ad.find().populate("carId").populate("userId");
    res.status(200).json(ads);
  } catch (error) {
    console.error("Error getting ads:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Controller to get a specific ad by ID
const getAdById = async (req, res) => {
  const { id } = req.params;

  try {
    const ad = await Ad.findById(id).populate("carId").populate("userId");

    if (!ad) {
      return res.status(404).json({ error: "Ad not found" });
    }

    res.status(200).json(ad);
  } catch (error) {
    console.error("Error getting ad:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Controller to update an existing ad
const updateAd = async (req, res) => {
  const { id } = req.params;

  try {
    const ad = await Ad.findByIdAndUpdate(id, req.body, { new: true });

    if (!ad) {
      return res.status(404).json({ error: "Ad not found" });
    }

    res.status(200).json(ad);
  } catch (error) {
    console.error("Error updating ad:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Controller to delete an ad by ID
const deleteAd = async (req, res) => {
  const { id } = req.params;

  try {
    const ad = await Ad.findByIdAndDelete(id);

    if (!ad) {
      return res.status(404).json({ error: "Ad not found" });
    }

    res.status(204).json(); // No content in the response
  } catch (error) {
    console.error("Error deleting ad:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  createAd,
  getAllAds,
  getAdById,
  updateAd,
  deleteAd,
};
