
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
		this.service.getApp((result) => {
			defer.resolve(result);
		});
		return defer.promise; 
	}

	create(newApp) {
    	let app = {
			title: newApp
		};
		let defer = this.q.defer();
		this.service.create(app, (result) => {
			defer.resolve(result);
		});
		return defer.promise;
	}

	// delete(todoId) {
	// 	let defer = this.q.defer();
	// 	this.service.delete({params: todoId}, (result) => {
	// 		defer.resolve(result);
	// 	});
	// 	return defer.promise;
	// }

	// update(todo) {
	// 	let defer = this.q.defer();
	// 	this.service.update({params: todo.todoId}, todo, (result) => {
	// 		defer.resolve(result);
	// 	});
	// 	return defer.promise;
	// }

}