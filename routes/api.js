// Dependencies
var express = require('express');
var router = express.Router();
var app = express();

// Models
var Product = require('../models/product');

// Routes
Product.methods(['get', 'put', 'post', 'delete']);
Product.register(router, '/serverStatus');

// Return router
module.exports = router;