export default class ModelService {

	/*@ngInject*/
	constructor($resource) {
		this.$resource = $resource;
		this.urlPrefix = 'http://localhost\\:8000/';
		let rest = {
			list: { 
				method: 'POST',
				params: {
					model: '',
					id: ''
				},
				isArray: true
			}	
		};
		return this.$resource(this.urlPrefix + 'api/models/:model/:id', null, rest);
	}
}