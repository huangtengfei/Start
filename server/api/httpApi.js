/**
 * author: huangtengfei
 * Date: 15-11-04
 * Time: 19:55
 * Desc: Start cloud sdk
 */

'use strict';

const _ = require('underscore');
const q = require('q');

const mongo = require('../dao/mongo');

let api = {};

api.list = () => {
	return mongo.list();
}

api.create = (newTodo) => {
	return mongo.create(newTodo);
}

api.add = (model, modelData) => {
	return mongo.add(model, modelData);
}

api.getAll = (model, params) => {
	return mongo.getAll(model, params);
}

module.exports = api;



