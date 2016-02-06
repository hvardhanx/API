
// Dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// MongoDB
mongoose.connect('mongodb://localhost/API');

// Express
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get('/api/request', function(req, res){
	var timeout = req.query.timeout;
	timeout = timeout*1000;
	setTimeout(function() {
		res.jsonp({ status: "ok" })
	}, timeout);
	console.log(req.query.timeout);
});

var Productmodel = require('./models/product');

app.get('/api/kill', function(req, res) {
	var connId_ = req.query.connId;
	
	Productmodel.count({ 'connId': connId_ }, function(err, doc) {
  		if (doc == 0 || err) res.jsonp({ "status": "invalid connection Id : " + connId_ });
  		else if(doc > 0)
  		{
  			// console.log(doc);
  			Productmodel.find({ 'connId': connId_ }).remove().exec();
  			res.jsonp({ status: "killed" });
  		}

	});
	console.log(connId_);
});


app.use('/api', require('./routes/api'));

// Start server
app.listen(3000);
console.log('API is running on port 3000');