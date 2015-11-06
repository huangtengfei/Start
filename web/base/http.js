/**
 * author: huangtengfei
 * Date: 15-11-06
 * Time: 11:48
 * Desc: Start javascript sdk
 */

 function get(url) {
 	return http(url, 'GET', null);
 }

 function post(uri,data){

    if(typeof data === 'object' && !(data instanceof String || (FormData && data instanceof FormData))) {
        var params = [];
        for(var p in data) {
            if(data[p] instanceof Array) {
                for(var i = 0; i < data[p].length; i++) {
                    params.push(encodeURIComponent(p) + '[]=' + encodeURIComponent(data[p][i]));
                }
            } else {
                params.push(encodeURIComponent(p) + '=' + encodeURIComponent(data[p]));
            }
        }
        data = params.join('&');
    }

    return http(uri, 'POST', data || null, {
        "Content-type":"application/x-www-form-urlencoded"
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
				defer.reject(xhr)
			}
		}
	}
	xhr.send(data);

	return defer.promise;
}

export {get, post};
