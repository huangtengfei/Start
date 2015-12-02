
/**
 * author: huangtengfei
 * Date: 15-11-09
 * Time: 15:35
 * Desc: Start javascript sdk
 */

import {get, post} from '../base/http';
import {modelUrl} from '../config';

export default class Query {

	constructor(model) {
		this.model = model;
	}

	find(condition) {

		let params = {		
			_method: 'GET', 
			condition: condition || {}
		};
		
		return post(modelUrl + this.model, params);
	}

}
