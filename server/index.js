/**
 * author: huangtengfei
 * Date: 15-11-04
 * Time: 19:55
 * Desc: Start cloud sdk
 */

'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const routes = require('./route/routes');

app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());
app.use(express.static('.'));

app.all('*', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header('Access-Control-Allow-Methods', 'OPTIONS,GET,POST,PUT,DELETE');
	res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");
	if ('OPTIONS' == req.method){
		return res.send(200);
	}
	next();
});

app.listen(8000, () => {
	console.log('node server started at port 8000...');
})

routes(app);