'use strict';

const mongo = require('../dao/mongo');

let api = {};

api.models = (req, res) => {

	let params = req.body;
	let modelName = req.params.model;

	let appKey = params._appKey;
	let condition = params.condition || {};
	let data = params.data || {};

	if(params._method){
		if(params._method === 'GET') {
			mongo.find(appKey, modelName, condition).then((result) => {
				res.send(JSON.stringify(result));
			})
		}else if(params._method === 'DELETE') {
			mongo.remove(appKey, modelName, condition).then((result) => {
				res.send(JSON.stringify(result));
			})
		}else if(params._method === 'UPDATE') {
			mongo.update(appKey, modelName, condition, data).then((result) => {
				res.send(JSON.stringify(result));
			})
		}		
	}else {
		mongo.insert(appKey, modelName, data).then((result) => {
			res.send(JSON.stringify(result));
		})
	}

} 

module.exports = api; 