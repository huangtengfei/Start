
export default class Todo {

	/*@ngInject*/
	constructor($q, service) {
		this.Start = Start;
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

	delete(todo) {
		let Thing = Start.Model("todo");
		return Thing.destroy(todo._id);
	}

	update(todo) {
		let Thing = Start.Model("todo");
		let newTodo = new Thing();
		newTodo.set('completed', todo.completed);

		return newTodo.update(todo._id);
	}

	updateTotal() {

	}

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