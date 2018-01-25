// Author cant
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var morgan = require('morgan')
// cors
const cors = require('cors');
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(morgan('tiny'));

const myLogger = function (req, res, next) {
  console.log('LOGGED request: ', req, ' date: ', Date.now());
  next();
};

app.use(myLogger);

app.get('/', (req, res) => res.send('Hello World!'));


//Import the mongoose module
var mongoose = require('mongoose');

//Set up default mongoose connection
var mongoDB = 'mongodb://localhost/trial';
mongoose.connect(mongoDB);
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const peopleRouter = require('./api/people');

app.route('people', peopleRouter(db));

app.listen(3000, () => console.log('Example app listening on port 3000!'));

// 404
app.use((req, res) => {
  res.status(404).send("Sorry can't find that!");
});

// 500
app.use((err, req, res) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
