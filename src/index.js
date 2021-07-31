import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import './App.css';
import { createStore, applyMiddleware } from 'redux';
// import App from './components/App';
import rootReducer from './reducers/index';
import Routes from './Routes';
import apiMiddleware from './redux/apimiddleware';

const store = createStore(rootReducer, applyMiddleware(apiMiddleware));
ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root'),
);
