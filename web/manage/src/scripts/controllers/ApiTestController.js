
export default class ApiTestController {

	/*@ngInject*/
	constructor(ApiService) {

		this.ApiService = ApiService;

		// this.params = {
		//     "_appKey": "5657d22fb9d589400a866f21",
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