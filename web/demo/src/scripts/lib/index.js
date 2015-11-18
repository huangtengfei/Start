
import Model from './core/model';
import Query from './core/query';
import {init} from './core/app';

(function(root){
	root.Start = {
		Model: Model,
		Query: Query,
		init: init
	};
})(window);
