

export default class Model {

	constructor($q, service, appKey){
		this.q = $q;
		this.service = service;
		this.appKey = appKey;
	}

	list(modelName) {
		let defer = this.q.defer();
		let params = {
			_appKey: this.appKey,
			_method: 'GET'
		};
		this.service.list({model: modelName}, params, (result) => {
			defer.resolve(result);
		});
		return defer.promise;
	}

	create(modelName, item) {
		let defer = this.q.defer();
		let params = {
			_appKey: this.appKey,
			data: item
		};
		this.service.create({model: modelName}, params, (result) => {
			defer.resolve(result);
		});
		return defer.promise;
	}

	remove(modelName, id) {
		let defer = this.q.defer();
		let params = {
			_appKey: this.appKey,
			_method: 'DELETE'
		};
		this.service.remove({model: modelName, id: id}, params, (result) => {
			defer.resolve(result);
		});
		return defer.promise;
	}

	removeAll(modelName, items) {
		let defer = this.q.defer();
		let params = {
			_appKey: this.appKey,
			_method: 'DELETE',
			modelName: modelName,
			data: items
		};
		this.service.removeAll(params, (result) => {
			defer.resolve(result);
		});
		return defer.promise;
	}

}