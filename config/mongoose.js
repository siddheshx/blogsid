var config = require('./config')
var mongoose = require('mongoose')
mongoose.Promise = require('bluebird')

module.exports = function () {
    
    var db = mongoose.connect(config.db, { useMongoClient : true })

    require('../app/models/user.server.model')

    return db;
}

