import React from 'react';
import ReactDOM from 'react-dom';

// imports from react-redux and redux
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import logger from 'redux-logger'; //permite monitorear el store por la consola
import reducer from './reducers';

import "core-js/stable";
import "regenerator-runtime";

import App from './routes/App';

const initialState = {
    favoriteCharacters: [],
    sectionActive: 'Characters'
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// implementamos una constante que contiene una difinición de composición, la cual contiene primero
// compose -> definición que venga de la gestión del logger o el store
// window__REDUX_DEVT... -> trabaja con la definición de redux devtools, la cual se ejecuta como una ventana

const store = createStore(reducer, initialState, composeEnhancers(applyMiddleware(logger)));
//createStore() siempre recibe dos parámetros
//reducer:  encargado de recibir todo tipo de acciones (desde el Action Store) que me permitirán modificar el store
//  composeEnhancers(applyMiddle...(logger)) -> interceptor de cara a la creación del store que trabajará con el logger
ReactDOM.render( < Provider store = { store } > < App /> </Provider>,document.getElementById('root'));