// Load the module dependencies
const config = require('./config');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

// Define the Mongoose configuration method
module.exports = function() {
	// Use Mongoose to connect to MongoDB
	const db = mongoose.connect(config.db, { useMongoClient: true });

	// Load the 'User' model 
	require('../app/models/user.server.model');

	// Return the Mongoose connection instance
	return db;
};