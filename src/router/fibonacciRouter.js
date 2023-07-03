const express = require('express');
const fibonacciController = require('../controller/fibonacciController');

const router = express.Router();

router.get('/fibonacci/:index', fibonacciController.getFibonacci);

module.exports = router;
