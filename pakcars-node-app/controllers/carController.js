/*
  This file contains the controllers for the car routes.

  This file contains the following functions:
  - createCar
  - getAllCars
  - getCarById
  - updateCar
  - deleteCar

  Each function uses the Car model to perform CRUD operations on the database.
*/
const Car = require("../models/car");

// Controller to create a new car
const createCar = async (req, res) => {
  try {
    const car = new Car(req.body);

    if (req.file) {
      car.imagePath = `/images/${req.file.filename}`;
    }

    await car.save();
    res.status(201).json(car);
  } catch (error) {
    console.error("Error creating car:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Controller to get all cars
const getAllCars = async (req, res) => {
  try {
    const cars = await Car.find().populate("brandId");
    res.status(200).json(cars);
  } catch (error) {
    console.error("Error getting cars:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Controller to get a specific car by ID
const getCarById = async (req, res) => {
  const { id } = req.params;

  try {
    const car = await Car.findById(id).populate("brandId");

    if (!car) {
      return res.status(404).json({ error: "Car not found" });
    }

    res.status(200).json(car);
  } catch (error) {
    console.error("Error getting car:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Controller to update an existing car
const updateCar = async (req, res) => {
  const { id } = req.params;

  try {
    const car = await Car.findByIdAndUpdate(id, req.body, { new: true });

    if (!car) {
      return res.status(404).json({ error: "Car not found" });
    }

    res.status(200).json(car);
  } catch (error) {
    console.error("Error updating car:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Controller to delete a car by ID
const deleteCar = async (req, res) => {
  const { id } = req.params;

  try {
    const car = await Car.findByIdAndDelete(id);

    if (!car) {
      return res.status(404).json({ error: "Car not found" });
    }

    res.status(204).json(); // No content in the response
  } catch (error) {
    console.error("Error deleting car:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  createCar,
  getAllCars,
  getCarById,
  updateCar,
  deleteCar,
};
