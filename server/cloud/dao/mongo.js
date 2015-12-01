/**
 * author: huangtengfei
 * Date: 15-11-05
 * Time: 20:44
 * Desc: Start cloud sdk
 */


'use strict';

const appSchema = require('../model/appSchema');
const modelSchema = require('../model/modelSchema');

const q = require('q');
const util = require('../helper/util');
const dbUrl = 'localhost/';

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let db;

let mongo = {};

/**
 * find by id
 *
 * @param {String} appKey
 * @param {String} modelName
 * @param {String} object id
 * @return {Promise}
 * @mongo api
 */
// mongo.findById = (appKey, modelName, id) => {

// 	let defer = q.defer();
	
// 	initDb(appKey).then((result) => {

// 		db = mongoose.createConnection('localhost', result.appName);
// 		Model = mongoose.model(modelName);

// 		Model.findById(id, (err, doc) => {
// 			if(err) {
// 				defer.reject(err);
// 			}
// 			defer.resolve(doc);
// 		})

// 	})

// 	return defer.promise;
// };

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
	
	getModel(appKey, modelName).then((result) => {

		let schema = new Schema(result.schemaObj, { versionKey: false });
		let Model = db.model(modelName, schema);

		Model.find(condition, (err, doc) => {
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
mongo.insert = (appKey, modelName, modelData) => {

	let defer = q.defer();

	getModel(appKey, modelName).then((result) => {

		let Model;

		if(result.noSchemaObject) {
			newSchema(appKey, modelName, util.getModel(modelData)).then((doc) => {

				let schema = new Schema(doc.schemaObj, { versionKey: false });
				Model = db.model(modelName, schema);

				let model = new Model(modelData);
				model.save((err, doc) => {
					if(err) {
						defer.reject(err);
					}
					defer.resolve(doc);
				});
			})			
		}else{

			let schema = new Schema(result.schemaObj, { versionKey: false })
			Model = db.model(modelName, schema);

			let model = new Model(modelData);
			model.save((err, doc) => {
				if(err) {
					defer.reject(err);
				}
				defer.resolve(doc);
			});
		}

	});

	return defer.promise;

}

// 创建一条新的 modelSchema
function newSchema(appKey, modelName, schemaObj) {

	let defer = q.defer();

	let data = {
		appKey: appKey,
		className: modelName,
		schemaObj: schemaObj
	}

	let Model = db.model('schema', modelSchema);
	let model = new Model(data);

	model.save((err, doc) => {
		if(err) {
			defer.reject(err);
		}
		defer.resolve(doc);
	});

	return defer.promise;

}

// 通过 modelName 找到 modelSchema
function getModel(appKey, modelName) {

	let defer = q.defer();

	getDb(appKey).then((appName) => {

		db = mongoose.createConnection('localhost', appName);	

		let Model = db.model('schema', modelSchema);

		Model.findOne({className: modelName}, (err, doc) => {
			if(err){
				defer.reject(err);
			}
			if(doc) {
				defer.resolve(doc);
			}else {
				defer.resolve({
					noSchemaObject: true
				})
			}
			
		})

	})

	return defer.promise;
}

// 通过 appKey 找到 appName
function getDb(appKey) {

	let defer = q.defer();

	db = mongoose.createConnection('localhost', 'start');	

	let Model = db.model('App', appSchema);	

	Model.findOne({'_id': appKey}, (err, doc) => {
		if(err) {
			defer.reject(err);
		}
		defer.resolve(doc.appName);
	});

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
// mongo.update = (appKey, modelName, id, data) => {

// 	let defer = q.defer();
	
// 	initDb(appKey).then((result) => {

// 		db = require('monk')(dbUrl + result.appName);
// 		let model = db.get(modelName);

// 		// only update spefic fields in a document
// 		model.findAndModify({'_id': id}, {$set: data}, (err, doc) => {
// 			if(err) {
// 				defer.reject(err);
// 			}
// 			defer.resolve(doc);
// 		})

// 	})

// 	return defer.promise;
// }

/**
 * remove
 *
 * @param {String} appKey
 * @param {String} modelName
 * @param {String} id
 * @return {Promise}
 * @mongo api
 */
// mongo.remove = (appKey, modelName, id) => {

// 	let defer = q.defer();
	
// 	initDb(appKey).then((result) => {

// 		db = require('monk')(dbUrl + result.appName);
// 		let model = db.get(modelName);

// 		model.remove({'_id': id}, (err, doc) => {
// 			if(err) {
// 				defer.reject(err);
// 			}
// 			defer.resolve(doc);
// 		})
// 	})

// 	return defer.promise;
// }

// mongo.getCollections = (appId) => {

// 	let defer = q.defer();
	
// 	initDb(appId).then((result) => {
// 		console.log(result);

// 		let mgs = mongoose.createConnection('localhost', result.appName);

// 		mgs.db.collectionNames(function (err, names) {
// 			console.log(names);
// 			defer.resolve(names);
// 		})


// 	})

// 	return defer.promise;

// }

/**
 * get dbName
 *
 * @param {String} appKey
 * @mongo api
 */
// function initDb(appKey) {

// 	let defer = q.defer();
// 	db = mongoose.createConnection('localhost', 'start');	
// 	console.log('isExist:' + mongoose.models['app']);
// 	let Model = mongoose.model('app');

// 	Model.findOne({_id: appKey}, (err, doc) => {
// 		if(err) {
// 			defer.reject(err);
// 		}
// 		defer.resolve(doc);
// 	})

// 	return defer.promise;

// }

module.exports = mongo;