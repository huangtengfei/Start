export default class AppFactory {

	/*@ngInject*/
	constructor($resource) {
		this.$resource = $resource;
		this.urlPrefix = 'http://localhost\\:8484/';
		let rest = {
			list: { 
				method: 'GET',
				isArray: true
			},
			create: {
				method: 'POST'
			},
			getApp: {
				method: 'GET',
				params: {
					id: ''
				}
			}		
		};
		return this.$resource(this.urlPrefix + 'api/apps/:id', null, rest);
	}
}