// Author cant
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

var morgan = require('morgan');

// hide powered by express
app.disable('x-powered-by');

// cors
const cors = require('cors');
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(morgan('tiny'));

const db = require('./config/mongoose');

const myLogger = function (req, res, next) {
  // console.log('LOGGED request: ', req, ' date: ', Date.now());
  console.log('LOGGED req body: ', req.body, ' date: ', Date.now());
  next();
};

app.use(myLogger);

app.get('/', (req, res) => res.send('Hello World!'));

var apiRouter = require('./api');
app.use('/api', apiRouter);

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
