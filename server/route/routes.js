/**
 * author: huangtengfei
 * Date: 15-11-04
 * Time: 19:55
 * Desc: Start cloud sdk
 */

'use strict';

const api = require('../api/httpApi');

function routes(app) {

	app.post('/api/models/:model', api.models);

}

module.exports = routes;