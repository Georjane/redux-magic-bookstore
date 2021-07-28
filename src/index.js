import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css'; import { createStore } from 'redux';
import App from './components/App';
import bookReducer from './reducers/books';

const initialState = [{ id: Math.floor(Math.random() * 100), title: 'Book 01', category: 'Fiction' }, { id: Math.floor(Math.random() * 100), title: 'Book 02', category: 'Science' }];
const store = createStore(bookReducer, initialState);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
