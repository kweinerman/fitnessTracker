
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },

  exercises: [
    {
      type: {
        type: String,
        trim: true
      },
      name: {
        type: String,
        trim: true
      },

      duration: {
        type: Number,
        match: [/^[0-9][A-Za-z0-9 -]*$/, "Please enter a duration"]
      },

      distance: {
        type: Number,
        match: [/^[0-9][A-Za-z0-9 -]*$/, "Please enter a distance"]
      },

      weight: {
        type: Number,
        match: [/^[0-9][A-Za-z0-9 -]*$/, "Please enter a weight"]
      },

      reps: {
        type: Number,
        match: [/^[0-9][A-Za-z0-9 -]*$/, "Please enter number of reps"]
      },
      sets: {
        type: Number,
        match: [/^[0-9][A-Za-z0-9 -]*$/, "Please enter how many sets"]
      }
    }
  ]
});

module.exports = mongoose.model("Workout", workoutSchema);