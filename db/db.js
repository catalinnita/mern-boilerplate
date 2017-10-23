var db = {}

db.connect = require('./utils/connect');
db.user    = require('./models/user');

module.exports = db;