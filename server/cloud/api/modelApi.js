'use strict';

const mongo = require('../dao/mongo');

let api = {};

api.models = (req, res) => {

	let params = req.body;
	let modelName = req.params.model;
	let appKey = params._appKey;

	if(params._method && params._method === 'GET'){
		mongo.list(appKey, modelName, params).then((result) => {
			res.send(JSON.stringify(result));
		})
	}else {
		mongo.create(appKey, modelName, params.modelData).then((result) => {
			res.send(JSON.stringify(result));
		})
	}

} 

module.exports = api; 