
'use strict';

const appSchema = require('../model/appSchema');
const q = require('q');

let mongoose = require('mongoose');
let db = mongoose.createConnection('localhost', 'start');
let Model = db.model('App', appSchema);

let mongo = {};

mongo.list = (params) => {

	let defer = q.defer();

	Model.find({}, (err, doc) => {
		if(err) {
			defer.reject(err);
		}
		defer.resolve(doc);
	})

	return defer.promise;

}

mongo.get = (appKey) => {

	let defer = q.defer();

	Model.findOne({_id: appKey}, (err, doc) => {
		if(err) {
			defer.reject(err);
		}
		defer.resolve(doc);
	})

	return defer.promise;

}

mongo.create = (appData) => {

	let defer = q.defer();
	let model = new Model(appData);

	model.save((err, doc) => {
		if(err) {
			defer.reject(err);
		}
		defer.resolve(doc);
	})

	return defer.promise;

}

module.exports = mongo;