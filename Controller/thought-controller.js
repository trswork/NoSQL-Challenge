const { User, Thought, Reaction } = require('../models');

const thoughtController = {
     // get all thought
    getAllThoughts(req, res) {
        Thought.find({})
          .then(dbThoughtData => res.json(dbThoughtData))
          .catch(err => {
            console.log(err);
            res.status(400).json(err);
          });
      },
// get thought by id
      getThoughtById({ params }, res) {
        Thought.findOne({ _id: params.id })
          .then(dbThoughtData => {
            if (!dbThoughtData) {
              res.status(404).json({ message: 'No thought found with this id!' });
              return;
            }
            res.json(dbThoughtData);
          })
          .catch(err => {
            console.log(err);
            res.status(400).json(err);
          });
      },
// createThought
      createThought({ body }, res) {
        Thought.create(body)
          .then(dbThoughtData => res.json(dbThoughtData))
          .catch(err => res.status(400).json(err));
      },
// update Thought by id
      updateThought({ params, body }, res) {
        Thought.findOneAndUpdate({ _id: params.id }, body, { new: true })
          .then(dbThoughtData => {
            if (!dbThoughtData) {
              res.status(404).json({ message: 'No thought found with this id!' });
              return;
            }
            res.json(dbThoughtData);
          })
          .catch(err => res.status(400).json(err));
      },
// delete Thought by id
        deleteThought({ params, body }, res) {
        Thought.findOneAndDelete({ _id: params.id }, body, { new: true })
        .then(dbThoughtData => {
            if (!dbThoughtData) {
            res.status(404).json({ message: 'No thought found with this id!' });
            return;
        }
            res.json(dbThoughtData);
      })
        .catch(err => res.status(400).json(err));
  },
};


module.exports = ThoughtController;