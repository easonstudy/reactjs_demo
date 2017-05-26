/**
 * Created by gmh on 2017/3/3 0003.
 */
import React from 'react'
import {Router, Route, IndexRoute} from 'react-router'
import {App, Auth, Error, Sports, BetListFull, Statement, Result, Setting} from './components'

module.exports = (
	<Router history={history}>
		<Route path="/" component={App}>
			<IndexRoute component={App}></IndexRoute>
		</Route>

		<Route path="auth/:token" component={Auth}/>
		<Route path="error" component={Error}/>

		<Route path="home" component={Error}/>
		<Route path="betListFull" component={BetListFull}></Route>
	</Router>
)