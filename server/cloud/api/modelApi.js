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
					let result = {};
					if(doc) {
						result.success = doc;
					}else {
						result.error = {
							code: 101,
							message: 'object not exist.'
						}
					}
					res.send(JSON.stringify(result));
				})
			}else {
				mongo.find(appKey, modelName, condition).then((docs) => {
					let result = {};
					if(docs) {
						result.success = docs;
					}else {
						result.error = {
							code: 103,
							message: 'no data in such condition.'
						}
					}
					console.log('----------find-----------');
					console.log(docs);
					res.send(JSON.stringify(result));
				})
			}
		}else if(method === 'DELETE') {
			mongo.remove(appKey, modelName, id).then((doc) => {
				let result = {};
				if(doc) {
					result.success = {
						_id: id
					}
				}else {
					result.error = {
						code: 101,
						message: 'object not exist.'
					}
				}
				res.send(JSON.stringify(result));
			})
		}else if(method === 'PATCH') {
			mongo.update(appKey, modelName, id, data).then((doc) => {
				let result = {};
				if(doc) {
					result.success = doc
				}else {
					result.error = {
						code: 101,
						message: 'object not exist.'
					}
				}
				res.send(JSON.stringify(result));
			})
		}		
	}else {
		mongo.insert(appKey, modelName, data).then((doc) => {
			let result = {};
			if(doc) {
				result.success = doc
			}else {
				result.error = {
					code: 102,
					message: 'invalid object.'
				}
			}
			res.send(JSON.stringify(result));
		})
	}

};



module.exports = api; 