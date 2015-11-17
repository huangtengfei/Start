import Todo from '../models/Todo';

import Start from '../lib/index';

export default class HomeController {

	/*@ngInject*/
	constructor($scope, $filter, $q, TodoFactory) {

		// this.todo = new Todo($q, TodoFactory);

		this.todos = [];
		this.uncompleted = 0;
		this.status = 'all';
		this.scope = $scope;

		Start.init('564a9acf7717444025ce5c95');

		let query = new Start.Query($scope, "todo");
		query.find().then((result) => {
			this.todos = JSON.parse(result);
			$scope.$apply();
		});

	    $scope.$watch('vm.todos', () => {
	    	this.uncompleted = $filter('filter')(this.todos, {completed: false}).length;
	    }, true);	  
	}

	add() {

		if(!this.newTodo) {
			return;
		}

		let Book = Start.Model("todo");
		let todo = new Book({
			title: this.newTodo,
			completed: false
		});

		todo.save().then((result) => {
			this.todos.push(JSON.parse(result));		
			this.newTodo = '';
			this.scope.$apply();
		});	
	}

	filterTodo(status) {
		this.status = (status === 1) ? 'all' : (status === 2) ? 'active' : 'completed';
		this.statusFilter = (status === 1) ? 
				{} : (status === 2) ? {completed: false} : {completed: true};
	}

}