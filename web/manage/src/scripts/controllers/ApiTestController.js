
export default class ApiTestController {

	/*@ngInject*/
	constructor(ApiService) {

		this.ApiService = ApiService;

		// this.params = {
		//     "_appKey": "564a9acf7717444025ce5c95",
		//     "_method": "GET"
		// };

	}

	send() {

		let params = this.params;

		this.ApiService.list({model: this.modelName, id: this.objectId}, params, (result) => {
			this.response = result.success;
			console.log(result);
		});

	}
}