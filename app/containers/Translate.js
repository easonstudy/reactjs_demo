/**
 * Created by gmh on 2017/4/21 0021.
 */
import React, {Component} from 'react'
import {translate} from 'react-i18next';

@translate(['common'],{wait:true})
class Translate extends Component {
	constructor(props){
		super(props)
	}

	render () {
		const {t, key} = this.props;
		let v = t(key);
		return <div>{t(key)}</div>;
	}
}

export default Translate