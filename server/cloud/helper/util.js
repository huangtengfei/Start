'use strict';

let util = {};

util.getModel = (model) => {

	let schema = {};

	for(let p in model) {
		schema[p] = util.type(model[p]);
	}
	
	return schema;

}

util.type = (src) => {
	var s = Object.prototype.toString.call(src);
	return s.match(/\[object (.*?)\]/)[1].toLowerCase();
}

module.exports = util;
