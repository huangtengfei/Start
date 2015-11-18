
export default class Todo {

	/*@ngInject*/
	constructor($q, service) {
		this.q = $q;
		this.service = service;	
	}

	list() {
		let query = new Start.Query("todo");
		return query.find();
	}

	create(newTodo) {

		if(!newTodo) {
			return;
		}

		let Thing = Start.Model("todo");
    	let todo = new Thing({
			title: newTodo,
			completed: false
		});
		
    	return todo.save();
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

	// clear(todos) {
	// 	let completedCol = [];
	// 	let uncompletedCol = [];
	// 	let defer = this.q.defer();
	// 	todos.forEach((todo) => {
	// 		if(todo.completed) {
	// 			completedCol.push({
	// 				todoId: todo.todoId
	// 			});
	// 		}else {
	// 			uncompletedCol.push(todo);
	// 		}
	// 	});
	// 	this.service.clear(completedCol, (result) => {
	// 		defer.resolve(uncompletedCol);
	// 	});
	// 	return defer.promise;
	// }

}