const mongoose = require('mongoose');

var Schema = mongoose.Schema;

const TodoSchema = new Schema({
  id: Schema.Types.ObjectId,
  description: String,
  status: {
    type: String,
    enum: ['Completed', 'Removed', 'Future'],
    required: [true, 'missing status']
  }
});

module.exports = mongoose.model('Todo', TodoSchema);
