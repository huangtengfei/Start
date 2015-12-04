
import App from '../models/App';
import Data from '../models/Data';
import Model from '../models/Model';

export default class DataManageController {

	/*@ngInject*/
	constructor($q, $stateParams, AppFactory, DataService, ModelService) {

		this._app = new App($q, AppFactory);
		this._data = new Data($q, DataService);
		this._model = new Model($q, ModelService);

		this.app = {};
		this.appKey = $stateParams.id;

		this._app.get(this.appKey).then((result) => {
			this.app = result;	
		});

		DataService.list({id: this.appKey}, (result) => {
			console.log(result);
			this.collections = result;
		})

	}

	selectC(c) {
		this.currentC = c;
		this._model.list(this.appKey, c.className).then((result) => {
			console.log(result);
			this.items = result;
		})
	}
}