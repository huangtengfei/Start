/**
 * author: huangtengfei
 * Date: 15-11-06
 * Time: 11:48
 * Desc: Start javascript sdk
 */

 function get(url, params) {
 	return http(url, 'GET');
 }

 function post(uri, data){

    return http(uri, 'POST', JSON.stringify(data) || null, {
        "Content-type":"application/json"
    });
}

function http(url, method, data, headers) {

	let defer = Promise.defer();

	let xhr = new XMLHttpRequest();
	xhr.open(method, url, true);
	if(headers) {
		for(let p in headers) {
			xhr.setRequestHeader(p, headers[p]);
		}
	}
	
	xhr.onreadystatechange = () => {
		if(xhr.readyState === 4) {
			if(String(xhr.status).match(/^2\d\d$/)){
				defer.resolve(xhr.responseText);
			}else {
				defer.reject(xhr);
			}
		}
	};
	
	xhr.send(data);

	return defer.promise;
}

export {get, post};
