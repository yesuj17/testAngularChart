var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

/// For Jade Source
app.set('view engine', 'jade');

var port = 8080;
var RealTimeChartData = require('./models/realTimeChartData');
var routes = require('./routes')(app, RealTimeChartData);

var server = app.listen(port, function () {
    console.log("Express server has started on port: " + port);
});

var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function () {
    console.log("Connected to mongo server");
});

mongoose.connect('mongodb://localhost:27017/mongdodb_hipas');

module.exports = app;