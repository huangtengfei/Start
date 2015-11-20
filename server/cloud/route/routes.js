/**
 * author: huangtengfei
 * Date: 15-11-04
 * Time: 19:55
 * Desc: Start cloud sdk
 */

'use strict';

const modelApi = require('../api/modelApi');
const batchApi = require('../api/batchApi');

function routes(app) {

	app.post('/api/models/:model', modelApi.models);
	app.post('/api/models/:model/:id', modelApi.models);
	app.post('/api/batch', batchApi.batch);

}

module.exports = routes;