/**
 * Created by gmh on 2017/5/15 0015.
 */
let HttpUtil = {};

/*let defaultHeader = new Headers({
	"Content-Type": "application/json; charset=UTF-8",
	'Authorization-Token': sessionStorage.getItem("token")
});*/
let defaultHeader = new Headers({
    "Content-Type": "application/json; charset=UTF-8"
});

/**
 * 基于 fetch 封装的 GET请求
 * @param url
 * @param params {}
 * @param headers
 * @returns {Promise}
 */
HttpUtil.get = function (url, params, headers) {
	if (params) {
		let paramsArray = [];
		//encodeURIComponent
		Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
		if (url.search(/\?/) === -1) {
			url += '?' + paramsArray.join('&')
		} else {
			url += '&' + paramsArray.join('&')
		}
	}
	//console.log(headers == undefined ? defaultHeader : headers);
	headers = headers == undefined ? defaultHeader : headers

	return new Promise(function (resolve, reject) {
			fetch(url, {
				method: 'GET',
				headers: headers,
			})
			.then((response) => {
				if (response.ok) {
					return response.json();
				} else {
					reject({status: response.status})
				}
			})
			.then((response) => {
				resolve(response);
			})
			.catch((err) => {
				reject({status: -1, error: err});
			})
	})
}

/**
 * 基于 fetch 封装的 POST请求  FormData 表单数据
 * @param url
 * @param formData
 * @param headers
 * @returns {Promise}
 */
HttpUtil.post = function (url, formData, headers) {
	headers = headers == undefined ? defaultHeader : headers;
	return new Promise(function (resolve, reject) {
		fetch(url, {
			method: 'POST',
			headers: headers,
			body: formData,
		})
			.then((response) => {
				if (response.ok) {
					return response.json();
				} else {
					reject({status: response.status})
				}
			})
			.then((response) => {
				resolve(response);
			})
			.catch((err) => {
				reject({status: -1, error: err});
			})
	})
}


export default HttpUtil;