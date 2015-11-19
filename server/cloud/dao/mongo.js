/**
 * author: huangtengfei
 * Date: 15-11-05
 * Time: 20:44
 * Desc: Start cloud sdk
 */


'use strict';

const q = require('q');
const dbUrl = 'localhost/';

let db;

let mongo = {};

mongo.create = (appKey, modelName, data) => {

	let defer = q.defer();

	initDb(appKey).then((result) => {

		db = require('monk')(dbUrl + result.appName);
		let model = db.get(modelName);

		model.insert(data, (err, doc) => {
			if(err) {
				defer.reject(err);
			}
			defer.resolve(doc);
		})

	})

	return defer.promise;

}

mongo.list = (appKey, modelName, params) => {

	let defer = q.defer();
	
	initDb(appKey).then((result) => {

		db = require('monk')(dbUrl + result.appName);
		let model = db.get(modelName);

		model.find({}, {}, (err, doc) => {
			if(err) {
				defer.reject(err);
			}
			defer.resolve(doc);
		})

	})

	return defer.promise;

}

mongo.removeById = (appKey, modelName, id) => {

	let defer = q.defer();
	
	initDb(appKey).then((result) => {

		db = require('monk')(dbUrl + result.appName);
		let model = db.get(modelName);

		model.remove({_id: id}, (err, doc) => {
			if(err) {
				defer.reject(err);
			}
			defer.resolve(doc);
		})

	})

	return defer.promise;

}

mongo.remove = (appKey, modelName, condition) => {

	let defer = q.defer();
	
	initDb(appKey).then((result) => {

		db = require('monk')(dbUrl + result.appName);
		let model = db.get(modelName);

		model.remove(condition, (err, doc) => {
			if(err) {
				defer.reject(err);
			}
			if(!doc){
				doc = {
					success: false,
					errCode: 101,
					errMsg: 'not exist data in such condition.'
				}
			}else {
				doc = {
					success: true,
					data: doc
				}
			}
			defer.resolve(doc);
		})
	})

	return defer.promise;

}

mongo.updateById = (appKey, modelName, id, data) => {

	let defer = q.defer();
	
	initDb(appKey).then((result) => {

		db = require('monk')(dbUrl + result.appName);
		let model = db.get(modelName);

		// update spefic fields in a document
		model.update({"_id": id}, { $set: data}, (err, doc) => {
			if(err) {
				defer.reject(err);
			}
			defer.resolve(doc);
		})

	})

	return defer.promise;

}

function initDb(appKey) {

	let defer = q.defer();
	db = require('monk')('localhost/start');
	let model = db.get('app');

	model.findOne({_id: appKey}, {}, (err, doc) => {
		if(err) {
			defer.reject(err);
		}
		defer.resolve(doc);
	})

	return defer.promise;

}

module.exports = mongo;