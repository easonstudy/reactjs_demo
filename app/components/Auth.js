/**
 * Created by gmh on 2017/4/19 0019.
 */
import React, {Component} from 'react'
import {Link, browserHistory} from 'react-router'

class Auth extends Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		const token = this.props.params.token;
		console.log("Auth token:" + token + ", length:" + token.length);
		browserHistory.push("/");
	}

	render() {
		return <div>
			<Link to="/">Home</Link>
		</div>
	}
}
export default Auth