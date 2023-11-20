const User = require("../models/user");
const jwt = require("jsonwebtoken");

// Create a new User
async function createUser(req, res) {
  const { Username, Password, Email } = req.body;

  try {
    // Check if a user with the same email already exists
    const existingUser = await User.findOne({ Email });
    console.log(existingUser);
    if (existingUser) {
      // If user already exists, send a message indicating that the email is already in use
      return res.status(400).json({ error: "Email is already in use" });
    }

    // If the user does not exist, create a new user
    const newUser = await User.create({
      Username,
      Password,
      Email,
      // Add other fields as needed
    });

    // Send a success response
    res.status(201).json(newUser);
  } catch (err) {
    // Handle any other errors that occurred during the user creation process
    console.error("Error creating user:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

// Get all User
async function getAllUsers(req, res) {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// Get a single user by ID
async function getUserById(req, res) {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// update a user by ID
async function updateUser(req, res) {
  try {
    const { id } = req.params;
    const updateuser = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updateuser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// delete a User by ID
async function deleteUser(req, res) {
  try {
    const { id } = req.params;
    await User.findByIdAndRemove(id);
    res.sendStatus(204);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function admindasbhard(req, res) {
  res.status(200).json({ message: "Admin Dashboard" });
}

// login a User
async function login(req, res, next) {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) return res.status(404).json({ error: "User not found" });
    if (user.password != password)
      return res.status(401).json({ error: "Invalid credentials" });
    var token = GenerateToken(user);
    return res.status(200).json({
      message: "User logged in successfully",
      username: user.username,
      userid: user._id,
      token: token,
    });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}

// helping function
//generating token
function GenerateToken(user) {
  const payload = {
    role: user.role,
    id: user._id,
  };
  const token = jwt.sign(payload, "123");
  return token;
}

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  login,
  admindasbhard,
};
