import Todo from '../models/Todo';

export default class HomeController {

	/*@ngInject*/
	constructor($scope, $filter, $q, TodoFactory) {

		this.todo = new Todo($q, TodoFactory);

		this.todos = [];
		this.uncompleted = 0;
		this.status = 'all';
		this.scope = $scope;

		this.todo.list().then((result) => {
			this.scope.$apply(() => {
				this.todos = result;
			});
		});

	    $scope.$watch('vm.todos', () => {
	    	this.uncompleted = $filter('filter')(this.todos, {completed: false}).length;
	    }, true);	  
	}

	add() {
		this.todo.create(this.newTodo).then((result) => {
			this.scope.$apply(() => {
				this.todos.push(result);		
				this.newTodo = '';
			});
		});	
	}

	remove(todo) {
		this.todo.remove(todo).then((result) => {
			this.scope.$apply(() => {
				this.todos.splice(this.todos.indexOf(todo), 1);
			});
		});
	}

	toggleCompleted(todo) {
		this.todo.update(todo).then((result) => {
			console.log(result);
		}, () => {
			todo.completed = !todo.completed;
		});
	}

	clearCompleted() {
		let uncompleted = [];
		let completed = [];
		this.todos.forEach((todo) => {				
			if(!todo.completed) {
				uncompleted.push(todo);
			}else {
				completed.push(todo._id);
			}		
		});
		this.todo.clear(completed).then((result) => {
			this.scope.$apply(() => {
				this.todos = uncompleted;
			});
		});
	}

	filterTodo(status) {
		this.status = (status === 1) ? 'all' : (status === 2) ? 'active' : 'completed';
		this.statusFilter = (status === 1) ? 
				{} : (status === 2) ? {completed: false} : {completed: true};
	}

}