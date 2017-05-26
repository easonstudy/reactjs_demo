/**
 * Created by gmh on 2017/5/26 0026.
 */

import {
	CALU_ADD,
	CALU_REDUCE
} from '../actions/CalculatorAction'

const initialState = {
	number: 0
}

function update(state = initialState, action) {
	switch (action.type) {
		case CALU_ADD:

			return {
				...state,
				number: state.number + 1
			}
			break;
		case CALU_REDUCE:
			return {
				...state,
				number: state.number - 1
			}
			break;
		default:
			break;
	}
	return state;
}

export default update