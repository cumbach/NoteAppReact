import './main.css';

import 'babel-polyfill'
import './lib/utils'
import storage from './lib/storage'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { notes } from './dux'

const rootReducer = combineReducers({notes})
const initialState = storage.get('noteApp') || {}

const store = createStore(rootReducer, initialState)

store.subscribe(
  () => storage.set('noteApp', store.getState())
)


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
