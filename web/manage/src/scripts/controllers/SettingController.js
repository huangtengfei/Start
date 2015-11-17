import App from '../models/App';

export default class SettingController {

	/*@ngInject*/
	constructor($q, $stateParams, AppFactory) {

		this._app = new App($q, AppFactory);

		this.app = {};

		this._app.get($stateParams.id).then((result) => {
			this.app = result;	
		});

	}
}