/*
  This is the main server file for the pakcars-node-app.
*/
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// routes
const userRoutes = require("./routes/userRoutes");
const profileRoutes = require("./routes/profileRoutes");
const carBrandRoutes = require("./routes/brandRoutes");
const adRoutes = require("./routes/adRoutes");
const carRoutes = require("./routes/carRoutes");

// db connection
require("./utils/db");
port = 3005;

const app = express();

// Use cors middleware
app.use(cors());

// Use body-parser middleware
app.use(bodyParser.json());

// Use routes
app.use("/api", userRoutes);
app.use("/api", profileRoutes);
app.use("/api", carBrandRoutes);
app.use("/api", adRoutes);
app.use("/api", carRoutes);

// Serve the public directory
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("PakCars API");
});

app.listen(port, () => {
  console.log(`Server is runing at port:${port}`);
});
