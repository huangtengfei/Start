'use strict';

let util = {};

util.getSchema = (model) => {

	let schema = {};

	for(let p in model) {
		if (util.type(model[p]) === 'Number'){
			schema[p] = Number;
		}else if (util.type(model[p]) === 'Date'){
			schema[p] = Date;
		}else if (util.type(model[p]) === 'Boolean'){
			schema[p] = Boolean;
		}else if (util.type(model[p]) === 'Array'){
			schema[p] = Array;
		}else if (util.type(model[p]) === 'Object'){
			schema[p] = Object;
		}else {
			schema[p] = String;
		}
	}

	return schema;

}

util.type = (src) => {
	var s = Object.prototype.toString.call(src);
	return s.match(/\[object (.*?)\]/)[1].toLowerCase();
}

module.exports = util;
