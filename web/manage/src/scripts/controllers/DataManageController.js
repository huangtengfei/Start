
import App from '../models/App';
import Data from '../models/Data';

export default class DataManageController {

	/*@ngInject*/
	constructor($q, $stateParams, AppFactory, DataService) {

		this._app = new App($q, AppFactory);
		this._data = new Data($q, DataService);

		this.app = {};

		this._app.get($stateParams.id).then((result) => {
			this.app = result;	
		});

		DataService.list({id: $stateParams.id}, (result) => {
			this.models = result;
		})

		// this._data.list($stateParams.id).then((result) => {
		// 	this.models = result;
		// })

	}
}