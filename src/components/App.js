import React, { Component } from 'react';
import axios from 'axios'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isLoggedIn: false,
      user: {}
     };
  };

  handleLogin = (data) => {
    this.setState({
      isLoggedIn: true,
      user: data.user
    })
  }
handleLogout = () => {
    this.setState({
    isLoggedIn: false,
    user: {}
    })
  }

  loginStatus = () => {
    axios.get('http://localhost:3000/auth/login', 
   {withCredentials: true})    
.then(response => {
  console.log(response);
      // if (response.data.logged_in) {
      //   this.handleLogin(response)
      // } else {
      //   this.handleLogout()
      // }
    })
    .catch(error => console.log('api errors:', error))
  };

  componentDidMount() {
    this.loginStatus()
  }

render() {
    return (
      <div>
         <BrowserRouter>
          <Switch>
            <Route exact path='/' component={}/>
            <Route exact path='/login' component={}/>
            <Route exact path='/signup' component={}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
};
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
