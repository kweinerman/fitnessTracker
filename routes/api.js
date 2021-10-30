const router = require("express").Router();
const Workout = require(`models/workoutModel.js`);

router.post(`/api/workouts`, ({ body }, res) => {
  Workout.create(body)
    .then(dbWorkout => res.json(dbWorkout))
    .catch(err => res.status(400).json(err));
});

router.put(`/api/workouts/:id`, ({ body, params }, res) => {
  Workout.findOneAndUpdate({ _id: params.id }, { $push: { exercises: body } })
    .then(dbWorkout => res.json(dbWorkout))
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.get(`/api/workouts`, (req, res) => {
  Workout.find({})
    .then(dbWorkout => {
      console.log(dbWorkout);
      return res.json(dbWorkout);
    })
    .catch(err => res.status(400).json(err));
});
router.get(`/api/workouts/range`, (req, res) => {
  Workout.find({})
    .then(dbWorkout => res.json(dbWorkout))
    .catch(err => res.status(404).json(err));
});

module.exports = router;