
export default function($urlRouterProvider, $stateProvider){
	'ngInject';

	$urlRouterProvider.otherwise('/home');

	$stateProvider
		.state('Home', {
			url: '/home',
			templateUrl: 'templates/home.html',
			controller: 'HomeController',	
			controllerAs: 'vm'
		});
}