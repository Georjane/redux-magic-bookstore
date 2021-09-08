import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  // fetch('http://localhost:3000/signup', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     // 'Content-Type': 'application/x-www-form-urlencoded',
  //   },
  //   mode: 'no-cors',
  //   data: {
  //     name: 'PACHECO',
  //     username: '4EVA',
  //     password: 'success',
  //     password_confirmation: 'success',
  //   },
  // })
  // .then((response) => response.json())
  // .then((response) => {
  //   console.log(response);
  // })
  // .catch((error) => console.log('api errors:', error));

  axios.post('http://localhost:3000/signup', {
    name: 'jane', username: 'username', password: 'password', password_confirmation: 'password',
  })
    .then((resp) => console.log(resp.data))
    .catch((errResp) => console.log(errResp.data));
  return (
    <div>
      <Link to="/login">Log In</Link>
      <br />
      <Link to="/signup">Sign Up</Link>
    </div>
  );
};
export default Home;
