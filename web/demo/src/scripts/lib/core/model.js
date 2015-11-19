/**
 * author: huangtengfei
 * Date: 15-11-04
 * Time: 19:55
 * Desc: Start javascript sdk
 */

import {get, post} from '../base/http';
import apiUrl from '../config';

export default function Model(model) {

	someModel.modelName = model;
	return someModel;

}

class someModel {

	constructor(initData) {
		this.updateData = {};
		this.initData = initData || {};
	}

	save() {
		let params = {
			data: this.initData
		};
		return post(apiUrl + someModel.modelName, params);
	}

	set(key, value) {
		this.updateData[key] = value;
	}

	updatePart(condition) {
		let params = {
			_method: 'UPDATE',
			condition: condition || {},
			data: this.updateData
		};
		return post(apiUrl + someModel.modelName, params);
	}

	update(condition) {
		let params = {
			_method: 'UPDATE',
			condition: condition || {},
			data: this.initData
		};
		return post(apiUrl + someModel.modelName, params);
	}
	
}

someModel.destroy = (condition) => {

	let params = {
		_method: 'DELETE',
		condition: condition || {}
	};

	return post(apiUrl + someModel.modelName, params);

};