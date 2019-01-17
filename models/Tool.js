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
});

const Tool = mongoose.model('tool', ToolSchema);
module.exports = Tool;
