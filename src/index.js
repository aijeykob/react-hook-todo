import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux'
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import createSagaMiddleware from 'redux-saga';
import "antd/dist/antd.css";
import rootSaga from './sagas';
import reducer from './reducers/index';

import App from './App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
const app = document.getElementById('root');

const store = createStore(reducer,
    composeEnhancers(
        applyMiddleware(sagaMiddleware)
    ));
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>
    ,
    app);