'use strict';

const mongo = require('../dao/mongo');
const wrapper = require('../helper/wrapper');

let api = {};

api.models = (req, res) => {

	let params = req.body;
	let modelName = req.params.model || '';
	let id = req.params.id || '';

	let appKey = params._appKey;
	let method = params._method;
	let condition = params.condition || {};
	let data = params.data || {};

	console.log('--------------params--------------');
	console.log(params);

	if(method){
		if(method === 'GET') {
			if(id) {
				mongo.findById(appKey, modelName, id).then((doc) => {
					res.send(JSON.stringify(doc));
				})
			}else {
				console.log(modelName);
				mongo.find(appKey, modelName, condition).then((doc) => {
					console.log(doc);
					res.send(JSON.stringify(doc));
				})
			}
		}else if(method === 'DELETE') {
			mongo.remove(appKey, modelName, id).then((doc) => {
				res.send(JSON.stringify(doc));
			})
		}else if(method === 'PATCH') {
			mongo.update(appKey, modelName, id, data).then((doc) => {
				res.send(JSON.stringify(doc));
			})
		}		
	}else {
		mongo.insert(appKey, modelName, data).then((doc) => {
			res.send(JSON.stringify(doc));
		})
	}

};



module.exports = api; 