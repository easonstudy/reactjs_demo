import React, {Component} from 'react'
import {Link, browserHistory} from 'react-router'

import Calculator from '../containers/Calculator'

class App extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.timer = setTimeout(function () {

		}, 2000);
	}

	render() {
		return <div className='red'>
					Links:
					<Link to="/"><div className="blue">Home</div></Link>
					{' '}
					<Link to="/betListFull">BetList Full</Link>

					<Calculator />
				</div>
	}
}
export default App