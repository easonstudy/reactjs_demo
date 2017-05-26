react-router-redux basic example
=================================

This is a basic example that demonstrates rendering components based
on URLs with `react-router` as well as connecting them to Redux state.
It uses both `<Link>` elements as well as the `push` action creator
provided by react-router-redux.

This example also demonstrates integration with
**[redux-devtools](https://github.com/gaearon/redux-devtools) ^3.0.0**

**To run, follow these steps:**

1. Install dependencies with `npm install` in this directory (make sure it creates a local node_modules)
2. By default, it uses the local version from `src` of react-router-redux, so you need to run `npm install` from there first. If you want to use a version straight from npm, remove the lines in `webpack.config.js` at the bottom.
3. Start build with `npm start`
4. Open [http://localhost:8080/](http://localhost:8080/)

-

If you want to run the example from the npm published version of
**react-router-redux**, remove the alias in `webpack.config`
to the source from line 21.

This example uses the latest version, switch to a specific tag to use a stable version:

e.g. [react-router-redux tag 1.0.2](https://github.com/reactjs/react-router-redux/tree/1.0.2/examples/basic)


server.js

"start": "if-env NODE_ENV=production && npm run start:prod || npm run start:dev",
"start:dev": "webpack-dev-server --inline --content-base src/ --history-api-fallback",
"start:prod": "webpack && node server.js

安装:
全局安装webpack
npm install webpack -g

该项目安装 webpack-dev-server
npm install webpack webpack-dev-server --save-dev

将babel-cli安装在项目之中
npm install --save-dev babel-cli

npm install style-loader css-loader --save-dev


webpack-dev-server:
content-Base	    默认情况下，webpack-dev-server会从项目的根目录提供文件，可以通过此选项设置文件的目录名
port	            服务器使用的端口，默认情况下为8080
inline	            设为true时可以在文件发生变化时，更新页面
colors	            设置终端输出字体颜色
historyApiFallback	当设置为true时，访问所有服务器上不存在的文件，都会被重定向到/，也就是index.html文件"



"babel-core": "^6.4.5",
    "babel-eslint": "^5.0.0-beta9",
    "babel-loader": "^6.2.2",
    "babel-plugin-transform-object-assign": "^6.8.0",
    "babel-preset-es2015": "^6.3.13",
    "babel-preset-react": "^6.3.13",
    "babel-preset-stage-0": "^6.3.13",
    "css-loader": "^0.26.1",
    "eslint": "^1.10.3",
    "eslint-config-rackt": "^1.1.1",
    "eslint-plugin-react": "^3.16.1",
    "extract-text-webpack-plugin": "^1.0.1",
    "file-loader": "^0.9.0",
    "node-sass": "^3.13.0",
    "react-hot-loader": "^1.3.1",
    "redux-devtools": "^3.3.1",
    "redux-devtools-dock-monitor": "^1.1.1",
    "redux-devtools-log-monitor": "^1.0.11",
    "sass-loader": "^4.0.2",
    "strip-loader": "^0.1.2",
    "style-loader": "^0.13.1",
    "url-loader": "^0.5.7",
    "webpack": "^2.2.1",
    "webpack-dev-server": "^1.16.3"