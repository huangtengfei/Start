
/**
 * author: huangtengfei
 * Date: 15-11-09
 * Time: 15:35
 * Desc: Start javascript sdk
 */

import {get, post} from '../base/http';
import apiUrl from '../config';

export default class Query {

	constructor(model) {
		this.model = model;
	}

	find() {
		let params = {		
			_method: 'GET'
		};
		return post(apiUrl + this.model, params);
	}

}
