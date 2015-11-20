'use strict';

const mongo = require('../dao/mongo');

let api = {};

api.batch = (req, res) => {

	let params = req.body;

	let appKey = params._appKey;
	let method = params._method;
	let modelName = params.modelName;
	let data = params.data;

	if(method) {
		if(method === 'DELETE') {
			data.forEach((id) => {
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
			})	
		}
	}

}

module.exports = api; 