import App from '../models/App';

export default class AppListController {

	/*@ngInject*/
	constructor($q, AppFactory) {

		this._app = new App($q, AppFactory);

		this.apps = [];

		this._app.list().then((result) => {
			this.apps = result;	
		});

	}
}