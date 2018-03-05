var express = require('express');
var router = express.Router();

const userRouter = require('./users');

const todoRouter = require('./todos');

router.use('/users', userRouter());
router.use('/todos', todoRouter);

module.exports = router;
