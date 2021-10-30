const router = require("express").Router();
const { Workout } = require(`../models/workouts`);

router.post(`/api/workouts`, ({ body }, res) => {
  Workout.create({})
    .then((workoutData) => {
      res.json(workoutData);
    })
    .catch((err) => {
      res.status(400).json(err);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.put(`/api/workouts/:id`, ({ body, params }, res) => {
  Workout.findByIdAndUpdate(
    req.params.id,
    {
      $push: {
        exercises: req.body,
      },
    },
    {
      new: true,
    }
  )
    .then((workoutData) => {
      res.json(workoutData);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});


router.get('/api/workouts/range', (req, res) => {
  Workout.aggregate([
    {
      $addFields: {
        totalDuration: {
          $sum: '$exercises.duration',
        },
      },
    },
  ])
    .sort({ _id: -1 })
    .limit(7)
    .then((workoutData) => {
      res.json(workoutData);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get(`/api/workouts`, (req, res) => {
  Workout.aggregate([
    {
      $addFields: {
        totalDuration: {
          $sum: '$exercises.duration',
        },
      },
    },
  ]).then((workoutData) => {
    res.json(workoutData);
  });
});

module.exports = router;