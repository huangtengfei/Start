
export default class Todo {

	/*@ngInject*/
	constructor($q, service) {

		this.q = $q;
		this.service = service;	

		this.TodoModel = Start.Model('todo');
		this.query = new Start.Query('todo');

	}

	list() {	
		return this.query.find();
	}

	create(newTodo) {

		if(!newTodo) {
			return;
		}
		
    	let todo = new this.TodoModel({
			title: newTodo,
			completed: false
		});
		
    	return todo.save();
	}

	updatePart(todo) {
		
		let newTodo = new this.TodoModel();
		let cond = {
			_id: todo._id
		};
		newTodo.set('completed', todo.completed);

		return newTodo.updatePart(cond);
	}

	update(todo) {

		let newTodo = new this.TodoModel({
			title: todo.title + '_updated',
			completed: todo.completed
		});

		let cond = {
			_id: todo._id
		};

		return newTodo.update(cond);
	}

	remove(todo) {	
		let cond = {
			_id: todo._id
		};
		return this.TodoModel.destroy(cond);
	}

	clear() {
		let cond = {
			completed: true
		};
		return this.TodoModel.destroy(cond);
	}

}