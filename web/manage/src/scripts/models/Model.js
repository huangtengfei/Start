

export default class Model {

	constructor($q, service){
		this.q = $q;
		this.service = service;
	}

	list(appKey, modelName) {
		let defer = this.q.defer();
		let params = {
			_appKey: appKey,
			_method: 'GET'
		}
		this.service.list({model: modelName}, params, (result) => {
			defer.resolve(result);
		});
		return defer.promise;
	}

}