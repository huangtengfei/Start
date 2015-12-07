export default class ModelService {

	/*@ngInject*/
	constructor($resource) {
		this.$resource = $resource;
		this.urlPrefix = 'http://localhost\\:8000/';
		let rest = {
			list: { 
				method: 'POST',
				params: {
					base: 'models',
					model: ''
				},
				isArray: true
			},
			create: {
				method: 'POST',
				params: {
					base: 'models',
					model: ''
				}
			},
			remove: {
				method: 'POST',
				params: {
					base: 'models',
					model: '',
					id: ''
				}
			},
			removeAll: {
				method: 'POST',
				params: {
					base: 'batch'
				}
			}
		};
		return this.$resource(this.urlPrefix + 'api/:base/:model/:id', null, rest);
	}
}