/**
 * Created by gmh on 2017/4/21 0021.
 */
//本地测试
let io_domain = "http://localhost:8080";
let api_domain = "http://localhost:8080";

let url = {
	io: io_domain,
	getTickets: api_domain + "/bet/getTickets",
	single: api_domain + '/bet/single',
	parlay: api_domain + '/bet/parlay',
	datelist: api_domain + '/api/v1/datelist',
	betlist: api_domain + '/api/v1/betlist',
	account:api_domain+'/api/v1/account'
}

let token = sessionStorage.getItem("token");
let headers = new Headers({
	"Content-Type": "application/json; charset=UTF-8",
	'Authorization-Token': token
});

let header = {
	json: headers
}

export default {
	url,
	header,
	setToken: function (t) {
		token = t
	},
	getToken: function () {
		return token;
	}
};