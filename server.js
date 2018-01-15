process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var configureMongoose = require('./config/mongoose')
var configureExpress = require('./config/express')
var configurePassport = require('./config/passport')

var db = configureMongoose()
var app = configureExpress()
var passport = configurePassport()

app.listen(3000)
module.exports = app;

console.log('Server running at http://localhost:3000/')