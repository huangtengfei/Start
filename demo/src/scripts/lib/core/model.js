/**
 * author: huangtengfei
 * Date: 15-11-04
 * Time: 19:55
 * Desc: Start javascript sdk
 */

import {get, post} from '../base/http';

const url = 'http://localhost:8000/api/models';

export default function Model(model) {

	window[model] = someModel;
	window[model].modelName = model;

	return window[model];

}

class someModel {

	constructor(opts) {
		this.data = {};
		this.data.modelData = opts;
	}

	save() {
		this.data.modelName = someModel.modelName;
		post(url, this.data).then(() => {
			alert('create model successful');
		})
	}
}