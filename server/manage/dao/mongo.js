
'use strict';

const q = require('q');

const db = require('monk')('localhost/start');

let mongo = {};

mongo.list = (params) => {

	let defer = q.defer();
	let model = db.get('app');

	model.find({}, {}, (err, doc) => {
		if(err) {
			defer.reject(err);
		}
		defer.resolve(doc);
	})

	return defer.promise;

}

mongo.get = (appId) => {

	let defer = q.defer();
	let model = db.get('app');

	model.findOne({_id: appId}, {}, (err, doc) => {
		if(err) {
			defer.reject(err);
		}
		console.log('-----------------');
		console.log(doc);
		defer.resolve(doc);
	})

	return defer.promise;

}

mongo.create = (appData) => {

	let defer = q.defer();
	let model = db.get('app');

	model.insert(appData, (err, doc) => {
		if(err) {
			defer.reject(err);
		}
		defer.resolve(doc);
	})

	return defer.promise;

}

module.exports = mongo;