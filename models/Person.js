const mongoose =require('mongoose');

var Schema = mongoose.Schema;

const Todo = require('./Todo');

const PersonSchema = new Schema({
  id: Schema.Types.ObjectId,
  name: String,
  email: String,
  friends: [PersonSchema],
  todos: [Todo]
});


module.exports = mongoose.model('Person', PersonSchema)


