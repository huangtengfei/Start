import App from '../models/App';

export default class NewAppController {

	/*@ngInject*/
	constructor($q, $stateParams, $state, AppFactory) {

		this._app = new App($q, AppFactory);
		this.$state = $state;

		this.app = {};

	}

	create() {
		this._app.create(this.appName).then((result) => {
			this.$state.go('Apps');
		});
	}
}