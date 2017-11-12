var config     = require('../../config');
var mongoose   = require('mongoose');

mongoose.connect(config.dbname, { 'useMongoClient': true });

module.exports = mongoose;