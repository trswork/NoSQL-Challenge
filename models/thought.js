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
        required: true
    },
    reactions: [ReactionSchema],
},
{
    toJSON: {
      virtuals: true,
    },
    id: false
  }
  );

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
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
},
{
    toJSON: {
      virtuals: true,
    },
    id: false
  }
  );

module.exports = Thoughts; 