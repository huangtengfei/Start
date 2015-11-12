
export default function($urlRouterProvider, $stateProvider){
	'ngInject';

	$urlRouterProvider.otherwise('/home');

	$stateProvider
		.state('Home', {
			url: '/home',
			templateUrl: 'templates/home.html',
			controller: 'HomeController',	
			controllerAs: 'vm' // use controllerAs with vm
		})
		.state('App', {
			url: '/app',
			templateUrl: 'templates/app.html',
			controller: 'AppController',
			controllerAs: 'vm'
		});
}