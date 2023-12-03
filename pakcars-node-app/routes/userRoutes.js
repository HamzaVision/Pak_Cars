/*
    This file contains the routes for the user model
*/
const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
// const authValidate = require("../utils/authorization_middleware");

// Create a user
router.post("/users", userController.createUser);

// Get all users
router.get("/users", userController.getAllUsers);

// update a user by ID
router.put("/users/:id", userController.updateUser);

// delete a user by ID
router.delete("/users/:id", userController.deleteUser);

// login
router.post("/login", userController.login);

// router.post("/admin", authValidate.validateToken, userController.admindasbhard);

module.exports = router;
