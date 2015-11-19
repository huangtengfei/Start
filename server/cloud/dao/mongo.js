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

/**
 * find
 *
 * @param {String} appKey
 * @param {String} modelName
 * @param {Object} query condition
 * @return {Promise}
 * @mongo api
 */
mongo.find = (appKey, modelName, condition) => {

	let defer = q.defer();
	
	initDb(appKey).then((result) => {

		db = require('monk')(dbUrl + result.appName);
		let model = db.get(modelName);

		model.find(condition, (err, doc) => {
			if(err) {
				defer.reject(err);
			}
			defer.resolve(doc);
		})

	})

	return defer.promise;
};

/**
 * find by id
 *
 * @param {String} appKey
 * @param {String} modelName
 * @param {String} object id
 * @return {Promise}
 * @mongo api
 */
mongo.findById = (appKey, modelName, id) => {

	let defer = q.defer();
	
	initDb(appKey).then((result) => {

		db = require('monk')(dbUrl + result.appName);
		let model = db.get(modelName);

		model.findById(id, (err, doc) => {
			if(err) {
				defer.reject(err);
			}
			defer.resolve(doc);
		})

	})

	return defer.promise;
};

/**
 * insert
 *
 * @param {String} appKey
 * @param {String} modelName
 * @param {Object} the data to be inserted
 * @return {Promise}
 * @mongo api
 */
mongo.insert = (appKey, modelName, data) => {

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

/**
 * update
 *
 * @param {String} appKey
 * @param {String} modelName
 * @param {String} object id
 * @return {Promise}
 * @mongo api
 */
mongo.update = (appKey, modelName, id, data) => {

	let defer = q.defer();
	
	initDb(appKey).then((result) => {

		db = require('monk')(dbUrl + result.appName);
		let model = db.get(modelName);

		// only update spefic fields in a document
		model.update({'_id': id}, {$set: data}, (err, doc) => {
			if(err) {
				defer.reject(err);
			}
			defer.resolve(doc);
		})

	})

	return defer.promise;
}

/**
 * remove
 *
 * @param {String} appKey
 * @param {String} modelName
 * @param {Object} query condition
 * @return {Promise}
 * @mongo api
 */
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
					code: 101,
					error: 'not exist data in such condition.'
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

/**
 * get dbName
 *
 * @param {String} appKey
 * @mongo api
 */
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