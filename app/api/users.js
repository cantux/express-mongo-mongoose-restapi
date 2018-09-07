var express = require('express');

const todoRouter = require('./todos');

var router = express.Router();

let userModel = require('../models/User');

function userRouterCreator () {
  // middleware that is specific to this router
  router.use(
    function timeLog (req, res, next) {
      console.log('User router time: ', Date.now());
      next()
    }
  );

  router.get('/',
    function (req, res) {
      userModel.model.find({}, function(err, user) {
          console.log(user);
        return res.send(user);
      });
    }
  );

  // define the home page route
  router.get('/:name',
    function (req, res) {
      userModel.model.find({name: req.params.name}, function(err, user) {
        return res.send(user);
      });
    }
  );

  router.post('/',
    function (req, res) {
      userModel.model.create({name: req.body.name}, function(err, user) {
        return res.send(user);
      });
    }
  );

  router.delete('/:id',
    function (req, res) {
      userModel.model.find({_id: req.params.id}, function(err, users) {
        users.forEach(
          function (user) {
            user.remove(
              function (err1) {
                userModel.model.find(
                  function (err2, users) {
                    if(err2) {
                      return res.send(users);
                    }
                    return res.send(users);
                  }
                );
              }
            );
          }
        );
      });
    }
  );

  router.use('/:id/todos', todoRouter);

  return router;
}

module.exports = userRouterCreator;
