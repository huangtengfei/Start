
import AppListController from './controllers/AppListController';
import SettingController from './controllers/SettingController';
import AppFactory from './services/AppFactory';
import config from './config';

angular.module('Start', ['ui.router', 'ngResource'])	// do not forget inject ui.router or ngRoute if you use route
	.config(config)
	.controller('AppListController', AppListController)
	.controller('SettingController', SettingController)
	.service('AppFactory', AppFactory)