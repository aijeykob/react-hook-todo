import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose, combineReducers} from 'redux'
import { reducer as formReducer } from 'redux-form'
import {Provider} from "react-redux";
import createSagaMiddleware from 'redux-saga';
import "antd/dist/antd.css";
import rootSaga from './sagas';
import mainReducer from './reducers/index';
import MainRoutes from './MainRoutes';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
const app = document.getElementById('root');

const reducers = {
  mainReducer,
  form: formReducer
}
const reducer = combineReducers(reducers)
const store = createStore(reducer,
    composeEnhancers(
        applyMiddleware(sagaMiddleware)
    ));
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <MainRoutes />
  </Provider>
    ,
    app);