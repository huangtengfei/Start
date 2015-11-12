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
					id: '5643009ef86efc4c2ebbd304'
				}
			}		
		};
		return this.$resource(this.urlPrefix + 'api/apps/:params', null, rest);
	}
}