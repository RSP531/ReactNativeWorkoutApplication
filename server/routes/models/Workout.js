const mongoose = require("mongoose");

const WorkoutSchema = mongoose.Schema({
  codedDay: {
    type: String
  },
  exercise: {
    type: String
    // required: true
  },
  setsReps: {
    type: String,
    // required: true,
    default: "4x10"
  },
  youTube: {
    type: String
    // unique: true
  }
});

module.exports = mongoose.model("workout", WorkoutSchema);
