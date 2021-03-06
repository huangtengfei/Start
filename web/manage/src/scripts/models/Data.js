
export default class Data {

	constructor($q, service){
		this.q = $q;
		this.service = service;
	}

	getModels(appId) {
		let defer = this.q.defer();
		this.service.getModels({id: appId}, (result) => {
			defer.resolve(result);
		});
		return defer.promise;
	}

}