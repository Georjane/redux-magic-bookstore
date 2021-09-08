import React, { Component } from 'react';
import axios from 'axios';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      passwordConfirmation: '',
      // errors: '',
    };
  }

handleChange = (event) => {
  const { name, value } = event.target;
  this.setState({
    [name]: value,
  });
};

handleSubmit = (event) => {
  event.preventDefault();
  const { username, password, passwordConfirmation } = this.state;
  const user = {
    username,
    password,
    passwordConfirmation,
  };
  axios.post('http://localhost:3000/signup', { user }, { withCredentials: true }, { mode: 'no-cors' })
    .then((response) => {
      console.log(response);
    // if (response.data.status === 'created') {
    //   this.props.handleLogin(response.data)
    //   this.redirect()
    // } else {
    //   this.setState({
    //     errors: response.data.errors
    //   })
    // }
    })
    .catch((error) => console.log('api errors:', error));
};

// redirect = () => {
//   this.props.history.push('/');
// }

// handleErrors = () => {
//   return (
//     <div>
//       <ul>{this.state.errors.map((error) => {
//         return key={error}>{error}</li>
//       })}
//       </ul>
//     </div>
//   )
// };
render() {
  const {
    username, password, passwordConfirmation,
  } = this.state;
  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder="username"
          type="text"
          name="username"
          value={username}
          onChange={this.handleChange}
        />
        <input
          placeholder="password"
          type="password"
          name="password"
          value={password}
          onChange={this.handleChange}
        />
        <input
          placeholder="password confirmation"
          type="password"
          name="password_confirmation"
          value={passwordConfirmation}
          onChange={this.handleChange}
        />

        <button placeholder="submit" type="submit">
          Sign Up
        </button>

      </form>
    </div>
  );
}
}
export default Signup;
