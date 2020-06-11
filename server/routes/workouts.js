const express = require("express");
const router = express.Router();

const Workout = require("./models/Workout");

// @route   GET api/workout
// @desc    Get a specific workout based on day and send back Name, YouTube, & Sets/Reps
// @access  Public
router.get("/day/:day/week/:week", async (req, res) => {
  let workout = await Workout.find(
    {
      weekString: req.params.week,
      day: req.params.day
    },
    { setsReps: 1, youTube: 1, exerciseName: 1 }
  );
  res.send(workout);
});

// @route   PUT api/workout/"Dumbbell upright rows"
// @desc    Get a specific workout and edit it
// @access  Public
router.put("/modifySetsReps", async (req, res) => {
  const { exerciseName, setsReps } = req.body;
  let response = await Workout.update({ exerciseName }, { setsReps });

  if (!response) {
    return res.status(400).json({ msg: "Workout does not exist" });
  }

  res.send(response);
});

// @route   DELETE api/workout
// @desc    Get a specific workout and edit it
// @access  Public
router.delete("/deleteByName", async (req, res) => {
  const { exerciseName, day } = req.body;
  let response = await Workout.remove({ exerciseName, day }, { justOne: true });

  res.send(response);
});

// @route   POST api/workout/addWorkout
// @desc    Post a workout for a specific day
// @access  Public
router.post("/addWorkout", async (req, res) => {
  const {
    codedDay,
    exerciseName,
    setsReps,
    youTube,
    day,
    weekArray,
    weekString,
    superSet,
    superSetNumber
  } = req.body;

  let workout = await Workout.findOne({ exerciseName, day });
  if (workout) {
    return res
      .status(400)
      .json({ msg: "Workout Already exists, maybe try PUT req" });
  }

  workout = new Workout({
    codedDay, //Day1Week123Order1
    exerciseName,
    setsReps,
    youTube,
    day,
    weekArray,
    weekString,
    superSet,
    superSetNumber
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
