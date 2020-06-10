const mongoose = require("mongoose");

const WorkoutSchema = mongoose.Schema({
  exercise: {
    exercise: String,
    required: true
  },
  setsReps: {
    type: String,
    required: true,
    default: "4x10"
  },
  youTube: {
    type: String,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("workout", WorkoutSchema);
