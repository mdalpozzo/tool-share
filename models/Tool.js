const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Create Schema
const ToolSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users',
  },
  name: {
    type: String,
    require: true,
    max: 40,
  },
  description: {
    type: String,
    require: true,
    max: 100,
  },
  images: {
    0: {
      data: Buffer,
      type: String,
    },
    1: {
      data: Buffer,
      type: String,
    },
    2: {
      data: Buffer,
      type: String,
    },
    3: {
      data: Buffer,
      type: String,
    },
  },
});

const Tool = mongoose.model('tool', ToolSchema);
module.exports = Tool;
