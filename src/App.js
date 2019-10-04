import React, { Component } from 'react'
import LoginContainer from './components/containers/Login/LoginContainer'
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import Search from './components/Search'
import HomeContainer from './components/containers/HomeContainer'
import './App.css'
import NavContainer from './components/containers/NavContainer'

class App extends Component {
  state = {
    parks: [],
    selectedState: null,
    selectedPark: null,
    user: null,
    bucketlist: null
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
      this.setState({ 
        user: user.user,
        bucketlist: user.user.parks
       })
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

  addParkToBucketlist = (park) => {
    fetch('http://localhost:3000/api/v1/bucketlists', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user_id: this.state.user.id,
        park_id: park.id
        })
      })
      // .then(response => response.json())
      return this.updateBucketlist(park)
  }

  updateBucketlist = (park) => {
    this.state.bucketlist.includes(park)
      ? this.setState({bucketlist: this.state.bucketlist.filter(p => p !== park)})
      : this.setState({bucketlist: [...this.state.bucketlist, park]})
  }

  removeParkFromBucketlist = (park) => {
    console.log(park)
    console.log(this.state.bucketlist)
    fetch('http://localhost:3000/api/v1/bucketlists', {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user_id: this.state.user.id,
        park_id: park.id
        })
      })
      return this.updateBucketlist(park)
  }
  
  componentDidMount() {
    fetch('http://localhost:3000/api/v1/parks')
      .then(response => response.json())
      .then(parks => this.setState({ parks }))
  }

  render() {
    return (
      <div className="App">
        <header>
          <NavContainer user={this.state.user}
            logout={this.logout}
            updateSelectedPark={this.updateSelectedPark} 
            updateSelectedState={this.updateSelectedState} />
          <h1>EN ROUTE to ...</h1>
          <Search parks={this.state.parks} 
            selectedState={this.state.selectedState}
            updateSelectedState={this.updateSelectedState} 
            selectedPark={this.state.selectedPark}
            updateSelectedPark={this.updateSelectedPark} 
          />
        </header>

        <Router>
          {localStorage.getItem('token') && this.state.user ? <Redirect to='/home' /> : <Redirect to='/login' />}

          <Route path='/home' render={(...props) => 
            <HomeContainer 
              parks={this.state.parks} 
              selectedState={this.state.selectedState} 
              updateSelectedState={this.updateSelectedState}
              selectedPark={this.state.selectedPark} 
              updateSelectedPark={this.updateSelectedPark}
              user={this.state.user}
              bucketlist={this.state.bucketlist}
              addParkToBucketlist={this.addParkToBucketlist}
              removeParkFromBucketlist={this.removeParkFromBucketlist}
            /> } 
          />
            
          <Route exact path='/login' render={(...props) => <LoginContainer login={this.login} user={this.state.user} /> } />
        </Router>
      </div>
    )
  }
}

export default App
