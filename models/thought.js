const { Schema, model } = require('mongoose');

const ThoughtsSchema = new Schema({
    thoughtText: {
        type: String,
        required: 'Text is Required',
        minlength: 1,
        maxlength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    createdBy: {
        type: String,
        required: 'Username is Required'
    },
    reactions: [ReactionSchema],
});

const Thoughts = model('Thoughts', ThoughtsSchema);

ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
  });

module.exports = Thoughts; 