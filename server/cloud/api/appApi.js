'use strict';

const mongo = require('../dao/mongo');

let api = {};

api.create = (req, res) => {
	let appData = req.body;
	mongo.createApp(appData).then((result) => {
		res.send(JSON.stringify(result));
	})
}

api.init = (req, res) => {
	let params = req.body;
	console.log(params);
	mongo.initApp(params).then((result) => {
		console.log(result);
		res.send(JSON.stringify(result));
	})
}

module.exports = api; 