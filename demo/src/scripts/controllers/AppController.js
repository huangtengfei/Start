
import {get, post} from '../lib/base/http';

export default class AppController {
	
	/*@ngInject*/
	constructor() {

	}

	create() {

		if(!this.appName) {
			return;
		}

		let params = {
			appName: this.appName
		};

		let url = 'http://localhost:8000/api/apps/create';

		post(url, params).then((result) => {
			alert(result);
		});	
	}
}