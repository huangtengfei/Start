
import {get, post} from '../base/http';

const baseUrl = 'http://localhost:8000/api/apps/init';

var APP_NAME;

function init(appid) {

	let params = {
		appid: appid
	}
	
	return post(baseUrl, params);

}

export {init};