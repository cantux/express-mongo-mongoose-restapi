var express = require('express');
var router = express.Router({mergeParams: true});

let userModel = require('../models/User');

// middleware that is specific to this router
router.use(
    function timeLog (req, res, next) {
      console.log('Todo router time: ', Date.now());
      next()
    }
);

router.get('/:id',
    function (req, res) {
      userModel.model.find({_id: req.params.id}, function(err, user) {
        return res.send(user.todos);
      });
    }
);

router.post('/',
    function (req, res) {
      userModel.model.findOne(
        {_id: req.params.id},
        function(err, user) {
          user.todos.push({description: req.body.description});
          user.save();
          return res.send(user.todos);
      });
    }
);

router.delete('/:todoid',
function (req, res) {
  userModel.model.findOne({_id: req.params.id}, function(err, user) {
    // TODO: rwong
    // user.todos.remove(function (err) {
    //   if(err) {
    //     return res.status(400).send(user);
    //   }
    //   return res.send(user);
    // });
  });
}
);

module.exports = router;
