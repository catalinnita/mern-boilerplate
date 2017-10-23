var config     = require('../../config');
var mongoose   = require('mongoose');

mongoose.connect(config.database, { useMongoClient: true });

module.exports = mongoose;