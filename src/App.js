import React, { Component } from 'react'
import Login from './components/Login'
import Home from './components/Home'
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
// import {createBrowserHistory} from 'history'
import Search from './components/Search'
import ParkContainer from './components/containers/ParkContainer'
// import ParkCard from './components/cards/ParkCard'
import './App.css'

class App extends Component {
  state = {
    parks: [],
    selectedState: null,
    selectedPark: null,
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
    localStorage.removeItem('token')
    this.setState({ user: null })
  }

  updateSelectedState = (state) => {
    this.setState({ selectedState: state })
  }

  updateSelectedPark = (park) => {
    this.setState({ selectedPark: park })
  }
  
  componentDidMount() {
    fetch('https://peaceful-escarpment-43371.herokuapp.com/api/v1/parks')
      .then(response => response.json())
      .then(parks => this.setState({ parks }))
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>EN ROUTE to ...</h1>
          <Search parks={this.state.parks} updateSelectedState={this.updateSelectedState} updateSelectedPark={this.updateSelectedPark} />
        </header>

        <ParkContainer parks={this.state.parks} 
          selectedState={this.state.selectedState} 
          updateSelectedState={this.updateSelectedState}
          selectedPark={this.state.selectedPark} 
          updateSelectedPark={this.updateSelectedPark}
          />

        <Router>
          {localStorage.getItem('token') ? <Redirect to='/home' /> : <Redirect to='/' />}
          <Route exact path='/login' render={(...props) => <Login login={this.login} user={this.state.user} /> } />
          {this.state.user ? <Route path='/home' render={(...props) => <Home user={this.state.user} logout={this.logout} /> }  /> : null}
          {/* {this.state.selectedPark ? <Route path='park' render={(...props) => <ParkCard selectedPark={this.state.selectedPark} />} /> : null} */}
        </Router>
      </div>
    )
  }
}

export default App
