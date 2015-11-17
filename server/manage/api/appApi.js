'use strict';

const mongo = require('../dao/mongo');

let api = {};

api.create = (req, res) => {
	let appData = req.body;
	console.log(appData);
	mongo.create(appData).then((result) => {
		res.send(result);
	})
}

api.list = (req, res) => {
	mongo.list().then((result) => {
		res.send(result);
	})
}

api.get = (req, res) => {
	let appId = req.params.id;
	mongo.get(appId).then((result) => {
		res.send(result);
	})
}

module.exports = api; 