const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Create Schema
const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users',
  },
  handle: {
    type: String,
    require: true,
    max: 40,
  },
  location: {
    type: String,
  },
  status: {
    type: String,
    required: true,
  },
  tools: [
    {
      toolName: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      image: {
        data: Buffer,
        contentType: String,
      },
    },
  ],
  bio: {
    type: String,
  },
  social: {
    youtube: {
      type: String,
    },
    twitter: {
      type: String,
    },
    facebook: {
      type: String,
    },
    linkedin: {
      type: String,
    },
    instagram: {
      type: String,
    },
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Profile = mongoose.model('profile', ProfileSchema);
module.exports = Profile;
