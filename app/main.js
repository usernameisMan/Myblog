//main.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore ,applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'

import AllStyle from './style/All.css'//全局CSS样式
import Components_Style from './style/Components_Style.css'//组件CSS样式
import App from './Components/app.js'//导航组件
import reducers from './reducers/index.js'

const store=createStore(reducers,applyMiddleware(thunk,createLogger));
console.log(store.getState())
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider >,
    document.getElementById("content")
)  

