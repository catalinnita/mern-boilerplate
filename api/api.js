// modules
import express from 'express'
//import db from '../db/db'
import setRoutes from './routes.js'

var app = express();

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