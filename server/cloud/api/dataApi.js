'use strict';

const mongo = require('../dao/mongo');

let api = {};

api.models = (req, res) => {

	let appId = req.params.id || '';
	mongo.getCollections(appId).then((doc) => {
		res.send(doc);
	})


}

module.exports = api; 