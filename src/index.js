import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import './App.css';
import { createStore } from 'redux';
import App from './components/App';
import rootReducer from './reducers/index';

// const initialState = {
//   books: [
//     { id: Math.floor(Math.random() * 100), title: 'On Becoming', category: 'Literature' },
//     { id: Math.floor(Math.random() * 100), title: 'Rich Dad, Poor Dad', category: 'Business' },
//     { id: Math.floor(Math.random() * 100), title: 'Think Big', category: 'Motivation' },
//   ],
//   filter: 'All',
// };
// console.log(initialState);
const store = createStore(rootReducer);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
