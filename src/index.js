import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import axios from 'axios';
import './App.css';
import { createStore, applyMiddleware } from 'redux';
// import App from './components/App';
import rootReducer from './reducers/index';
import Routes from './Routes';
import apiMiddleware from './redux/apimiddleware';

console.log('yes');
axios({
  method: 'post',
  url: 'http://localhost:3000/books',
  data: {
    title: 'Rich Dad Poor Dad',
    author: 'Kiyoski',
    category: 'Business',
  },
});
axios
  .get('http://localhost:3000/books', { mode: 'no-cors' })
  .then((response) => {
    const { data } = response;
    console.log(data);
  });
const store = createStore(rootReducer, applyMiddleware(apiMiddleware));
ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root'),
);
