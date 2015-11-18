
import HomeController from './controllers/HomeController';
import TodoFactory from './services/TodoFactory';
import autoFocus from './directives/autoFocus';
import config from './config';

// import Start from './lib/index';
import run from './lib/run';

angular.module('Todo', ['ui.router', 'ngResource'])	
	.config(config)
	.controller('HomeController', HomeController)
	.service('TodoFactory', TodoFactory)
	// .service('Start', () => Start)
	.directive('autoFocus', autoFocus.directiveFactory)
	.run(() => {
		Start.init('564a9acf7717444025ce5c95');
	})