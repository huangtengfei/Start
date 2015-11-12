/**
 * author: huangtengfei
 * Date: 15-11-04
 * Time: 19:55
 * Desc: Start javascript sdk
 */

import {get, post} from '../base/http';

export default function Model(model) {
	
	let url = 'http://localhost\\:8000/';
	let data = {model: model};

	post(url, data).then(() => {
		alert('create model successful');
	})

}