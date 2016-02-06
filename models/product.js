// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var productSchema = new mongoose.Schema({
    timeout: Number,
    connId: Number
});

// Return model
module.exports = restful.model('Products', productSchema);