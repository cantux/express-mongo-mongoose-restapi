var express = require('express');

function peopleRouterCreator (mongoConnection) {
  var router = express.Router();

// middleware that is specific to this router
  router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now());
    next()
  });

// define the home page route
  router.get('/:id', function (req, res) {
    console.log('asdf')
    res.send('hello') // mongoConnection.find(req.params.id));
  });

  return router;
}

module.exports = peopleRouterCreator;
