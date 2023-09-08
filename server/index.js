const express = require("express");
const colors = require("colors");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const { readdirSync } = require("fs");
dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());
// routes
readdirSync("./routes").map((r) => app.use("/", require("./routes/" + r)));
console.log(readdirSync("./routes"));
const PORT = process.env.PORT || 8001;
app.listen(PORT,'0.0.0.0', () => {
  console.log(`Server is running on ${PORT}`.bgCyan.white);
});
// DATABASE
mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
  })
  .then(() => console.log("Database connected successfully".bgGreen.white))
  .catch((error) =>
    console.log("Error connection to mongodb".bgRed.white, error)
  );