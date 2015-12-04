
import AppListController from './controllers/AppListController';
import NewAppController from './controllers/NewAppController';
import SettingController from './controllers/SettingController';
import DataManageController from './controllers/DataManageController';
import ApiTestController from './controllers/ApiTestController';
import AppFactory from './services/AppFactory';
import ApiService from './services/ApiService';
import ModelService from './services/ModelService';
import DataService from './services/DataService';
import config from './config';

angular.module('Start', ['ui.router', 'ngResource'])	// do not forget inject ui.router or ngRoute if you use route
	.config(config)
	.controller('AppListController', AppListController)
	.controller('NewAppController', NewAppController)
	.controller('SettingController', SettingController)
	.controller('DataManageController', DataManageController)
	.controller('ApiTestController', ApiTestController)
	.service('ApiService', ApiService)
	.service('ModelService', ModelService)
	.service('DataService', DataService)
	.service('AppFactory', AppFactory);