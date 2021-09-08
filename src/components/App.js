import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Home from './Home';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      user: {},
    };
  }

  componentDidMount() {
    const { isLoggedIn, user } = this.state;
    console.log(isLoggedIn);
    console.log(user);

    // this.loginStatus()
  }

  handleLogin = (data) => {
    this.setState({
      isLoggedIn: true,
      user: data.user,
    });
  }

handleLogout = () => {
  this.setState({
    isLoggedIn: false,
    user: {},
  });
}

  loginStatus = () => {
    axios.get('http://localhost:3000/auth/login',
      { withCredentials: true })
      .then((response) => {
        console.log(response);
        if (response.data.logged_in) {
          this.handleLogin(response);
        } else {
          this.handleLogout();
        }
      })
      .catch((error) => console.log('api errors:', error));
  };

  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;

// import BooksForm from '../containers/BooksForm';
// import BooksList from '../containers/BooksList';

// function App() {
//   return (
//     <div className="root">
//       <main>
//         <BooksList />
//         <hr />
//         <BooksForm />
//       </main>
//     </div>
//   );
// }

// export default App;
