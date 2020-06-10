const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const { check, validationResult } = require("express-validator");

const Workout = require("./models/Workout");

// @route   GET api/workout
// @desc    Get all the Workouts
// @access  Public
router.get("/", (req, res) => {
  res.send("Here is a workout");
});

// @route   GET api/workout
// @desc    Get a specific workout based on day
// @access  Public
router.get("/:day", (req, res) => {
  res.send("Here is a specific workout");
});

module.exports = router;
