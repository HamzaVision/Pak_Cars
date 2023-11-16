const express = require("express");
const bodyParser = require("body-parser");
// const userRoutes = require("./routes/userRoutes");
// const authValidate = require("./utils/authorization_middleware");
require("./utils/db");
port = 3005;

const app = express();

app.use(bodyParser.json());
// app.use("/api", userRoutes);

app.get("/", (req, res) => {
  res.send("PakCars API");
});

app.listen(port, () => {
  console.log(`Server is runing at port:${port}`);
});
