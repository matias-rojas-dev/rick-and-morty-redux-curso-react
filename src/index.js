import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducers';

import App from './routes/App';

const initialState = {
  favoriteCharacters: [],
  sectionActive: 'Characters'
};

const store = createStore(reducer, initialState); //createStore() siempre recive dos parámetros
//reducer:  encargado de recibir todo tipo de acciones (desde el Action Store) que me permitirán modificar el store
ReactDOM.render(
  <Provider store={store}>
    <App /> 
  </Provider>,
  document.getElementById('root')
);