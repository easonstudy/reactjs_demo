/**
 * Created by gmh on 2017/5/15 0015.
 * 自定义中间件
 */
var middlewareLogger = ({getState}) => next => action => {
	//console.log("custom 1:" + getState());
	next(action);
	//console.log("custom 2:" + getState());
}

export default middlewareLogger;