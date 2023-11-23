const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// routes
const userRoutes = require("./routes/userRoutes");
const profileRoutes = require("./routes/profileRoutes");
// const authValidate = require("./utils/authorization_middleware");
require("./utils/db");
port = 3005;

const app = express();

// Use cors middleware
app.use(cors());
app.use(bodyParser.json());

app.use("/api", userRoutes);
app.use("/api", profileRoutes);

app.get("/", (req, res) => {
  res.send("PakCars API");
});

app.listen(port, () => {
  console.log(`Server is runing at port:${port}`);
});
