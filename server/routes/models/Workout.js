const mongoose = require("mongoose");

const WorkoutSchema = mongoose.Schema({
  codedDay: {
    type: String
  },
  exerciseName: {
    type: String
    // required: true
  },
  setsReps: {
    type: String,
    // required: true,
    default: "4x10"
  },
  youTube: {
    type: [String]
    // unique: true
  },
  day: {
    type: Number
  },
  weekArray: [Number],
  weekString: String,
  program: {
    type: String,
    default: "12 Week"
  },
  superSet: {
    type: Boolean,
    default: false
  },
  superSetNumber: {
    type: String
  }
});

module.exports = mongoose.model("workout", WorkoutSchema);
