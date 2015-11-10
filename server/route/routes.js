/**
 * author: huangtengfei
 * Date: 15-11-04
 * Time: 19:55
 * Desc: Start cloud sdk
 */

'use strict';

const api = require('../api/httpApi');

function routes(app) {

	app.get('/api/todos', (req, res) => {
		api.list().then((result) => {
			res.send(result);
		})
	})

	app.post('/api/todos', (req, res) => {
		let newTodo = req.body;
		if(!newTodo.title) {
			res.status(500).json({error: "No data found to add"});
		}else {
			api.create(newTodo).then((result) => {
				res.send(result);
			})
		}	
	})

	app.post('/api/models/:model', (req, res) => {

		let params = req.body;
		let model = req.params.model;

		if(params._method && params._method === 'GET'){
			api.getAll(model, params).then((result) => {
				res.send(JSON.stringify(result));
			})
		}else {
			api.add(model, params.modelData).then((result) => {
				res.send(JSON.stringify(result));
			})
		}
	})

}

module.exports = routes;