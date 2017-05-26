/**
 * Created by gmh on 2017/5/26 0026.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'

import {add, reduce} from '../actions/CalculatorAction'

class Calculator extends Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {

	}

	render() {
		const {number} = this.props;
		return <div>
			Calculator : {number} <br/>
			<button onClick={() => this.props.onAdd()}>Add</button>
			<button onClick={() => this.props.onReduce()}>Reduce</button>
		</div>
	}

}

function mapStateToProps(state) {
	return {
		number: state.CalculatorReducer.number
	};
}

function mapDispatchToProps(dispatch) {
	return {
		onAdd: () => dispatch(add()),
		onReduce: () => dispatch(reduce())
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Calculator)