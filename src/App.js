import React, { Component } from 'react'
import Login from './components/Login'
import Home from './components/Home'
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
// import {createBrowserHistory} from 'history'
// import ParkContainer from './components/containers/ParkContainer'
import './App.css'

class App extends Component {
  state = {
    parks: [],
    selectedState: '',
    selectedPark: '',
    user: null
  }

  login = (user) => {
    fetch('http://localhost:3000/api/v1/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({user})
    })
    .then(response => response.json())
    .then(user => {
      localStorage.setItem('token', user.jwt)
      this.setState({ user: user.user })
    })
  }

  logout = () => {
    console.log('hit')
    localStorage.removeItem('token')
    this.setState({ user: null })
  }
  
  // componentDidMount() {
  //   fetch('https://peaceful-escarpment-43371.herokuapp.com/api/v1/parks')
  //     .then(response => response.json())
  //     .then(result => this.setState({ parks }))
  // }

  render() {
    console.log(this.state.user)
    return (
      <div className="App">
        <Router>
          {localStorage.getItem('token') ? <Redirect to='/home' /> : <Redirect to='/' />}
          <Route exact path='/' render={(...props) => <Login login={this.login} user={this.state.user} /> } />
          {this.state.user ? <Route path='/home' render={(...props) => <Home user={this.state.user} logout={this.logout} /> }  /> : null}
        </Router>
      </div>
    )
  }
}

export default App
