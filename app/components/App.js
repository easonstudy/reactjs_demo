import React, {Component} from 'react'
import {Link, browserHistory} from 'react-router'

import {HttpUtil} from '../utils'

import Calculator from '../containers/Calculator'
import Language from '../containers/Language'

class App extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		HttpUtil.get("../app/data/login.json").then(res => {
			console.log(res);
		})

		this.timer = setTimeout(function () {

		}, 2000);
	}

	render() {
		return <div className='red'>
			Links:
			<Link to="/">
				<div className="blue">Home</div>
			</Link>
			{' '}
			<Link to="/betListFull">BetList Full</Link>

			<Calculator />
			<Language />

		</div>
	}
}
export default App