const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
    {
        day: {
            type: Date,
            default: () => new Date()
        },
        excercises: [
            {
                type: { 
                    type: String,
                    trim: true,
                    required: "Enter an ecercise type"
                },
                name: {
                    type: String,
                    trim: true,
                    required: "Enter an excercise name"
                },
                duration: {
                    type: String,
                    trim: true,
                    required: "Enter how long the exercise took in minutes"
                },
                weight: {
                    type: Number
                },
                reps: {
                    type: Number
                },
                sets: {
                    type: Number
                },
                distance: {
                    type: Number
                }
            }
        ]
    }
);

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;