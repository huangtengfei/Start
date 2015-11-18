import Todo from '../models/Todo';

export default class HomeController {

	/*@ngInject*/
	constructor($scope, $filter, $q, TodoFactory) {

		this.todo = new Todo($q, TodoFactory);

		this.todos = [];
		this.uncompleted = 0;
		this.status = 'all';
		this.scope = $scope;

		Start.init('564a9acf7717444025ce5c95');

		this.todo.list().then((result) => {
			this.todos = JSON.parse(result);
			$scope.$apply();
		});

	    $scope.$watch('vm.todos', () => {
	    	this.uncompleted = $filter('filter')(this.todos, {completed: false}).length;
	    }, true);	  
	}

	add() {
		this.todo.create(this.newTodo).then((result) => {
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