/**
 * Created by gmh on 2017/3/15 0015.
 */
import React, {Component} from 'react'
import {translate, Interpolate} from 'react-i18next';

@translate(['common','nav'], {wait: true})
class BetListFull extends Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {

	}

	render() {
		const {t} = this.props;
		let betlist = t('betlist');

		return  <div>
					I am {betlist}, {t('nav:school.name')} <Interpolate i18nKey='nav:school.age' age={18}/>
				</div>
	}
}

export default BetListFull