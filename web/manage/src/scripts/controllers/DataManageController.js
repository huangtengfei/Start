
import App from '../models/App';
import Data from '../models/Data';
import Model from '../models/Model';

export default class DataManageController {

	/*@ngInject*/
	constructor($q, $stateParams, AppFactory, DataService, ModelService) {

		this.appKey = $stateParams.id;

		this._app = new App($q, AppFactory);
		this._data = new Data($q, DataService);
		this._model = new Model($q, ModelService, this.appKey);

		this.app = {};
		
		this._app.get(this.appKey).then((result) => {
			this.app = result;	
		});

		DataService.list({id: this.appKey}, (result) => {
			console.log(result);
			this.collections = result;
		});

	}

	selectC(c) {
		this.currentC = c;
		this._model.list(c.className).then((result) => {
			this.items = result;
		});
	}

	refresh() {
		this._model.list(this.currentC.className).then((result) => {
			this.items = result;
		});
	}

	add() {
		let newItem = {};
		Object.keys(this.currentC.schemaObj).forEach((k) => {
			newItem[k] = '';
			if (this.currentC.schemaObj[k] == 'boolean') {
				newItem[k] = 'false';
			}	
		});
		this.items.unshift(newItem);
	}

	save(item) {
		this._model.create(this.currentC.className, item).then((result) => {
			this.items.splice(0, 1);
			this.items.push(result);
		});
	}

	remove(item) {
		this._model.remove(this.currentC.className, item._id).then((result) => {
			this.items.splice(this.items.indexOf(item), 1);
		})
	}

	removeAll() {
		let checked = this.items.filter((item) =>{
			return item._checked;
		}).map((item) => {
			return item._id;
		})
		this._model.removeAll(this.currentC.className, checked).then((result) => {
			this.refresh();
		})
	}
}