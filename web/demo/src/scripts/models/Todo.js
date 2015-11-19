
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
		newTodo.set('completed', todo.completed);

		return newTodo.updatePart(todo._id);
	}

	update(todo) {

		let newTodo = new this.TodoModel({
			title: todo.title + '_updated',
			completed: todo.completed
		});

		return newTodo.update(todo._id);
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