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
			mongo.removeAll(appKey, modelName, data).then((doc) => {				
				res.send(doc);
			});
		}
	}

}

module.exports = api; 