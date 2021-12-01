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

const ReactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: new Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280
    },
    userName: {
        type: String,
        required: 'Username is Required',
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
});

module.exports = Thoughts; 