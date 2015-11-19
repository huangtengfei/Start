
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

	update(todo) {
		
		// 有两种方式更新一个 model，下面是方式一
		let newTodo = new this.TodoModel();
		newTodo.set('completed', todo.completed);

		// // 方式二
		// let newTodo = new this.TodoModel({
		// 	title: todo.title + '_updated',
		// 	completed: todo.completed
		// });

		return newTodo.update(todo._id);
	}

	remove(todo) {	
		return this.TodoModel.remove(todo._id);
	}

	clear() {
		let cond = {
			completed: true
		};
		return this.TodoModel.destroy(cond);
	}

}