/**
 * author: huangtengfei
 * Date: 15-11-04
 * Time: 19:55
 * Desc: Start cloud sdk
 */

'use strict';

const modelApi = require('../api/modelApi');
const appApi = require('../api/appApi');

function routes(app) {

	app.post('/api/models/:model', modelApi.models);
	app.post('/api/models/:model/:id', modelApi.models);

}

module.exports = routes;