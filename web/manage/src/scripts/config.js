
export default function($urlRouterProvider, $stateProvider){
	'ngInject';

	$urlRouterProvider.otherwise('/apps');

	$stateProvider
		.state('Apps', {
			url: '/apps',
			templateUrl: 'templates/appList.html',
			controller: 'AppListController',	
			controllerAs: 'vm'
		})
		.state('Setting', {
			url: '/setting?id',
			templateUrl: 'templates/setting.html',
			controller: 'SettingController',	
			controllerAs: 'vm'
		})
		.state('New', {
			url: '/create',
			templateUrl: 'templates/newApp.html',
			controller: 'NewAppController',	
			controllerAs: 'vm'
		})
		.state('Api', {
			url: '/api',
			templateUrl: 'templates/apiTest.html',
			controller: 'ApiTestController',	
			controllerAs: 'vm'
		});
}