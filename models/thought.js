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
    reactions: {
        type: Array
    }
});

const Thoughts = model('Thoughts', ThoughtsSchema);

module.exports = Thoughts 