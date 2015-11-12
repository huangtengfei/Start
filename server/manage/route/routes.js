/**
 * author: huangtengfei
 * Date: 15-11-04
 * Time: 19:55
 * Desc: Start cloud sdk
 */

'use strict';

const appApi = require('../api/appApi');

function routes(app) {

	app.post('/api/apps', appApi.create);
	app.get('/api/apps', appApi.list);
	app.get('/api/apps/:id', appApi.get);

}

module.exports = routes;