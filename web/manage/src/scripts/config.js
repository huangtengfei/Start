
export default function($urlRouterProvider, $stateProvider){
	'ngInject';

	$urlRouterProvider.otherwise('/start');

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
		.state('Other', {
			url: '/other',
			templateUrl: 'templates/archive.html'
		});
}