const express = require("express");
const router = express.Router();
const multer = require("multer");
const carController = require("../controllers/carController");

// Set up multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images/");
  },
  filename: function (req, file, cb) {
    // Append a timestamp to make the filename unique
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

const upload = multer({ storage: storage });

// Routes for Car CRUD operations
router.post("/cars", upload.single("imagePath"), carController.createCar);
router.get("/cars", carController.getAllCars);
router.get("/cars/:id", carController.getCarById);
router.put("/cars/:id", upload.single("imagePath"), carController.updateCar);
router.delete("/cars/:id", carController.deleteCar);

module.exports = router;
