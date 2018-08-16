const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TodoSchema = new Schema({
  id: Schema.Types.ObjectId,
  description: String,
  status: {
    type: String,
    enum: ['Completed', 'Removed', 'Future'],
    required: [false, 'missing status']
  }
});

TodoSchema.pre('save', function (next) {
  console.log('I am about to save thee');
  next();
});

module.exports = {
  schema: TodoSchema,
  model: mongoose.model('Todo', TodoSchema)
};
