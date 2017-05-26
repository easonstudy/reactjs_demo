/**
 * Created by gmh on 2017/3/12 0012.
 */
import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxPromise from "redux-promise";

import CustomLogger from './CustomLogger'
import { routerReducer } from 'react-router-redux'

import * as reducers from '../reducers'

const reducer = combineReducers({
    ...reducers,
    routing: routerReducer
})

const createStoreWithMiddleware = applyMiddleware(CustomLogger, ReduxPromise)(createStore);

export default function configureStore(initialState) {
    const store = createStoreWithMiddleware(reducer, initialState);
    return store;
}




