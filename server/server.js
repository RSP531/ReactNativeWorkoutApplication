const express = require("express");
const connectDB = require("./config/db");
const path = require("path");

const app = express();

connectDB();

app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.json({ msg: "2nd Hello World" }));

// app.use("/api/workouts", require("./routes/workouts"));

const port = process.env.PORT || 5000;

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
