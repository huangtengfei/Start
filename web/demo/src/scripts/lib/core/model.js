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
		this.data = {};
		this.updateData = {};
		this.data.modelData = initData;
	}

	save() {
		return post(apiUrl + someModel.modelName, this.data);
	}

	set(key, value) {
		this.updateData[key] = value;
	}

	update(id) {
		let params = {
			_method: 'UPDATE',
			id: id,
			updateData: this.updateData
		};
		return post(apiUrl + someModel.modelName, params);
	}
	
}

someModel.destroy = (id) => {

	let params = {
		_method: 'DELETE',
		id: id
	};

	return post(apiUrl + someModel.modelName, params);

};