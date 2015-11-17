
export default class App {

	/*@ngInject*/
	constructor($q, service) {
		this.q = $q;
		this.service = service;	
	}

	list() {
		let defer = this.q.defer();
		this.service.list((result) => {
			defer.resolve(result);
		});
		return defer.promise;
	}

	get(appId) {
		let defer = this.q.defer();
		this.service.getApp({id: appId}, (result) => {
			defer.resolve(result);
		});
		return defer.promise;
	}

	create(newApp) {
    	let app = {
			appName: newApp
		};
		let defer = this.q.defer();
		console.log(app);
		this.service.create(app, (result) => {
			defer.resolve(result);
		});
		return defer.promise;
	}
}