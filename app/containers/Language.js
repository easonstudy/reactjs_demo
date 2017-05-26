/**
 * Created by gmh on 2017/3/3 0003.
 */
import React, {Component} from 'react'
import {browserHistory} from 'react-router'
import i18n from '../i18n';

import {Util} from '../../utils'

class Language extends Component {
	//初始化STATE
	constructor(props) {
		super(props);
		this.state = {
			dropdownActive: false
		}
	}

	languageClick() {
		this.setState({dropdownActive: !this.state.dropdownActive});
	}

	languageChange(event) {
		let lang = localStorage.getItem("language");
		let newLang = event.target.id;

		if(lang === newLang){
			return;
		}

		i18n.changeLanguage(newLang, () => {
			//window.location.href = "http://192.168.88.215:8080/sports";
			localStorage.setItem("language", newLang);
			browserHistory.go('/sport')
		})
		this.setState({dropdownActive: false});
	}

	render() {
		let title, selected;
		title = selected = Util.language[localStorage.getItem("language")].text;

		return (
			<div className={( (this.state.dropdownActive == "1") ? "dropdownActive" : "") + " dropdown tool language"}
			     onClick={ this.languageClick.bind(this) }>
				<div className="selected" title={title}>
					{selected}
				</div>
				<div className="dropdownPanel">
					<div className="content" id="en" onClick={this.languageChange.bind(this)}>English</div>
					<div className="content" id="cn" onClick={this.languageChange.bind(this)}>简体中文</div>
				</div>
			</div>
		)
	}
}

export default Language



