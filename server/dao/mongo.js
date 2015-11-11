/**
 * author: huangtengfei
 * Date: 15-11-05
 * Time: 20:44
 * Desc: Start cloud sdk
 */


'use strict';

const q = require('q');

const db = require('monk')('localhost/start');

let mongo = {};

mongo.initApp = (params) => {

	let defer = q.defer();
	let model = db.get('app');

	model.findOne({_id: params.appid}, {}, (err, doc) => {
		if(err) {
			defer.reject(err);
		}
		defer.resolve(doc);
	})

	return defer.promise;

}

mongo.createApp = (appData) => {

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

mongo.create = (modelName, modelData) => {

	let defer = q.defer();
	let model = db.get(modelName);

	model.insert(modelData, (err, doc) => {
		if(err) {
			defer.reject(err);
		}
		defer.resolve(doc);
	})

	return defer.promise;

}

mongo.list = (modelName, params) => {

	let defer = q.defer();
	let model = db.get(modelName);

	model.find({}, {}, (err, doc) => {
		if(err) {
			defer.reject(err);
		}
		defer.resolve(doc);
	})

	return defer.promise;

}

module.exports = mongo;