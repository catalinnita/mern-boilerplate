// modules
import express from 'express'
import db from '../db/db'
import setRoutes from './routes'
import config from '../config'

import bodyParser from 'body-parser'

var app = express();

app.set('superSecret', config.super_secret);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
   	res.header("Access-Control-Allow-Origin", "*");
   	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   	next();
});

// ROUTES
// get an instance of the router for api routes
var apiRoutes = express.Router();
apiRoutes = setRoutes(apiRoutes);
console.log(apiRoutes);
app.use('/api', apiRoutes);


// START SERVER
var server = app.listen(3000, function () {

  var host = 'http://localhost';
  var port = 3000;

  console.log("Node server running at %s:%s", host, port)

});