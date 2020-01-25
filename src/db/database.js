const config = require('../config/config');
const mongoose = require('mongoose');

module.exports = () => {
	return new Promise((res, rej) => {
		mongoose.Promise = global.Promise;
		mongoose.set('debug', true);
		
		mongoose.connection
			.on('error', err => rej(err))
			.on('close', () => console.log('Database connection closed.'))
			.once('open', () => res(mongoose.connections[0]));
		
		mongoose.connect(config.MONGO_URL, {useMongoClient: true});
	});
};






















