/**
 * author: huangtengfei
 * Date: 15-11-05
 * Time: 20:44
 * Desc: Start cloud sdk
 */


'use strict';

const mongoose = require('mongoose');
const q = require('q');
const todoSchema = require('../model/schemas').todoSchema;
const util = require('../util/util');

mongoose.connect('mongodb://localhost/start');

let Todo = mongoose.model('todo', todoSchema);

let mongo = {};

mongo.list = () => {

	let defer = q.defer();

	Todo.find((err, doc) => {
		if(err) {
			defer.reject(err);
		}
		defer.resolve(doc);
	})

	return defer.promise;
}

mongo.create = (model) => {

	let defer = q.defer();

	let todo = new Todo(model);

	todo.save((err, doc) => {
		if(err) {
			defer.reject(err);
		}
		defer.resolve(doc);
	})

	return defer.promise;
}

mongo.add = (modelName, modelData) => {

	let defer = q.defer();
	let Model;

	if(mongoose.models[modelName]){
		Model = mongoose.model(modelName);
	}else {
		Model = mongoose.model(modelName, util.getSchema(modelData));
	}
	let model = new Model(modelData);

	model.save((err, doc) => {
		if(err) {
			defer.reject(err);
		}
		defer.resolve(doc);
	})

	return defer.promise;

}

mongo.getAll = (model, params) => {

	let defer = q.defer();
	let Model = mongoose.model(model);
	
	Model.find((err, doc) => {
		if(err) {
			defer.reject(err);
		}
		defer.resolve(doc);
	})

	return defer.promise;

}

module.exports = mongo;