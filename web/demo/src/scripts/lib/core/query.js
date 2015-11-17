
/**
 * author: huangtengfei
 * Date: 15-11-09
 * Time: 15:35
 * Desc: Start javascript sdk
 */

import {get, post} from '../base/http';

const baseUrl = 'http://localhost:8000/api/models/';

export default class Query {

	constructor(scope, model) {
		this.scope = scope;
		this.model = model;
	}

	find() {
		let params = {		
			_method: 'GET'
		};
		return post(baseUrl + this.model, params);
	}

}
