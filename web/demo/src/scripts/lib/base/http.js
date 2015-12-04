/**
 * author: huangtengfei
 * Date: 15-11-06
 * Time: 11:48
 * Desc: Start javascript sdk
 */

 function get(url) {
 	return http(url, 'GET');
 }

 function post(url, data){

 	data._appKey = window._appKey;  

 	let params = {
 		method: 'post',
 		headers: {
			'Accept': 'application/json',
		    'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
 	};

 	return http(url, params);
}

function http(url, params) {
	
	let defer = Promise.defer();

 	fetch(url, params)
 		.then(checkStatus)
 		.then(parseJson)
 		.then((response) => {
	 	  	defer.resolve(response);
	 	}).catch((error) => {
	 	  	defer.reject(error);
	 	});

 	return defer.promise;  
}

function checkStatus(response) {
	if(String(response.status).match(/^2\d\d$/)){
		return response;
	}else{
		var error = new Error(response.statusText);
		error.response = response;
		throw error;
	}
}

function parseJson(response) {
	return response.json();
}

export {get, post};
