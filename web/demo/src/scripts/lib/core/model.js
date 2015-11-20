/**
 * author: huangtengfei
 * Date: 15-11-04
 * Time: 19:55
 * Desc: Start javascript sdk
 */

import {get, post} from '../base/http';
import {apiUrl, modelUrl, batchPath} from '../config';

export default function Model(model) {

	someModel.modelName = model;
	return someModel;

}

class someModel {

	constructor(initData) {
		this.updateData = {};
		this.initData = initData;
	}

	save() {
		let params = {
			data: this.initData
		};
		return post(modelUrl + someModel.modelName, params);
	}

	set(key, value) {
		this.updateData[key] = value;
	}

	update(id) {
		let params = {
			_method: 'PATCH',
			data: this.initData || this.updateData
		};
		return post(modelUrl + someModel.modelName + '/' + id, params);
	}
	
}

someModel.remove = (id) => {

	let params = {
		_method: 'DELETE'
	};

	return post(modelUrl + someModel.modelName + '/' + id, params);

};

someModel.removeAll = (todos) => {

	let params = {
		_method: 'DELETE',
		modelName: someModel.modelName,
		data: todos
	};

	return post(apiUrl + batchPath, params);

};