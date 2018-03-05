const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Todo = require('./Todo');

const UserSchema = new Schema();

UserSchema.add({
  id: Schema.Types.ObjectId,
  name: String,
  email: String,
  friends: [UserSchema],
  todos: [Todo.schema]
});

// http://mongoosejs.com/docs/guide.html#methods
// Do not declare methods using ES6 arrow functions (=>).
// Arrow functions explicitly prevent binding this, so your method will not have access to the document and the above examples will not work.
UserSchema.methods.greet = function () {
  console.log('Greetings from person')
};

UserSchema.pre('remove', function (next) {
  this.model('Todo').remove(function (err, todo) {
    console.log('pre-delete user remove todo cb: ', todo);
  });
  next();
});

module.exports = {
  schema: UserSchema,
  model: mongoose.model('User', UserSchema, 'Users')
};


