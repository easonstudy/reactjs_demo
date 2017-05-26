/**
 * Created by gmh on 2017/4/13 0013.
 */
import React, {Component} from 'react'
import configureStore from './store/configureStore';
import {I18nextProvider} from 'react-i18next';

import {Provider} from 'react-redux'
import {Router, browserHistory} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'

import * as routes from "./routes"
import i18n from './i18n';

//获取本地语言
const local_language = (navigator.languages && navigator.languages[0]) || navigator.language || navigator.userLanguage;
//console.log("本地语言:" + local_language); //本地为zh-CN

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store)     //histtory.push(location), histtory.replace(location), histtory.go(), histtory.goBack(), histtory.goForward()

history.listen((location) => {
	console.log(location.pathname);     //analyticsService 监听请求的路径
})

class Wrapper extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		let lang = localStorage.getItem("language");
		if (lang == undefined) {
			local_language == "zh_CN" && (lang = "cn") || (lang = "en");
			localStorage.setItem("language", lang);
		}
		i18n.init({lng: lang})
		return <I18nextProvider i18n={i18n}>
			<Provider store={store}>
				<Router routes={routes} history={history}/>
			</Provider>
		</I18nextProvider>
	}
}

export default Wrapper;