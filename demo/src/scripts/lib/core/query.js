
/**
 * author: huangtengfei
 * Date: 15-11-09
 * Time: 15:35
 * Desc: Start javascript sdk
 */

import {get, post} from '../base/http';

const baseUrl = 'http://localhost:8000/api/models/';

export default class Query {

	constructor(model) {
		this.model = model;
	}

	find() {
		let params = {		
			_apiKey:'a12sd43fdf45',
			_apiId: 'k34asdg355d4',
			_method: 'GET'
		};
		return post(baseUrl + this.model, params);
	}

}