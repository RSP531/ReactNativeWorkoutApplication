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
  try {
    // let workout = await Workout.find();
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   GET api/workout
// @desc    Get a specific workout based on day
// @access  Public
router.get("/:day", (req, res) => {
  res.send("Here is a specific workout");
});

// @route   POST api/workout
// @desc    Post a workout for a specific day
// @access  Public
router.post("/:day", async (req, res) => {
  const { codedDay, exercise, setsReps, youTube } = req.body;

  let workout = await Workout.findOne({ codedDay });
  if (workout) {
    return res
      .status(400)
      .json({ msg: "Workout Already exists, maybe try PUT req" });
  }

  workout = new Workout({
    codedDay, //Day1Week123Order1
    exercise,
    setsReps,
    youTube
  });

  await workout.save();

  res.send("Workout saved");

  try {
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;

const exerciseList = [
  {
    exercise: "Deadlift",
    setsReps: "4 SETS X 10,8,6,4",
    youTube: "https://www.youtube.com/watch?v=-4qRntuXBSc&t=13s"
  },
  {
    exercise: "Pull Ups",
    setsReps: "4 SETS X 10 REPS",
    youTube: "https://www.youtube.com/watch?v=vw5Xmu5CIew"
  },
  {
    exercise: "Single Arm Dumbbell Row",
    setsReps: "4 SETS X 10 REPS",
    youTube: "https://www.youtube.com/watch?v=CCiXFyJqDCM"
  },
  {
    exercise: "T-Bar Row",
    setsReps: "4 SETS X 10 REPS",
    youTube: "https://www.youtube.com/watch?v=rvbjGSQ2tVE"
  },
  {
    exercise: "Barbell Face Pulls",
    setsReps: "4 SETS X 10 REPS",
    youTube: "https://www.youtube.com/watch?v=wqdXBiu6OUU"
  },
  {
    exercise: "Bent Over Lateral Raises",
    setsReps: "4 SETS X 10 REPS",
    youTube: "https://www.youtube.com/watch?v=b_LEX4n9lOs"
  }
];
