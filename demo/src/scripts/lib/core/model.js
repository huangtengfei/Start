/**
 * author: huangtengfei
 * Date: 15-11-04
 * Time: 19:55
 * Desc: Start javascript sdk
 */

import {get, post} from '../base/http';

const url = 'http://localhost:8000/api/models/';

export default function Model(model) {

	window[model] = someModel;
	window[model].modelName = model;

	return window[model];

}

class someModel {

	constructor(initData) {
		this.data = {};
		this.data.modelData = initData;
	}

	save(optsData) {

		this.data.modelData = optsData || this.data.modelData;
		return post(url + someModel.modelName, this.data);

	}
}