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

	addNumber() {
		const {dispatch} = this.props;
		dispatch(add());
	}

	render() {
		const {number} = this.props;
		return <div>
			Calculator : {number} <br/>
			<button onClick={() => this.props.onAddNumber()} value="Add"/>
			<button onClick={() => this.props.onReduce()} value="Reduce"/>
		</div>
	}

}

function mapStateToProps(state) {
	return {
		number: state.CalculatorReducer.number
	};
}

function mapDispatchToProps(dispatch) {
	debugger;
	return {
		onAddNumber: () => dispatch(add()),
		onReduce: () => dispatch(reduce())
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Calculator)