import React, { Component } from 'react'
import Login from './components/Login'
// import UserProfile from './components/cards/UserProfile'
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
// import {createBrowserHistory} from 'history'
import Search from './components/Search'
import HomeContainer from './components/containers/HomeContainer'
// import ParkCard from './components/cards/ParkCard'
import './App.css'
import NavContainer from './components/containers/NavContainer'

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

        {/* <ParkContainer parks={this.state.parks} 
          selectedState={this.state.selectedState} 
          updateSelectedState={this.updateSelectedState}
          selectedPark={this.state.selectedPark} 
          updateSelectedPark={this.updateSelectedPark}
          /> */}

        <Router>
          {this.state.user ? <Redirect to='/home' /> : <Redirect to='/login' />}

          <Route path='/home' render={(...props) => 
            <HomeContainer 
              parks={this.state.parks} 
              selectedState={this.state.selectedState} 
              updateSelectedState={this.updateSelectedState}
              selectedPark={this.state.selectedPark} 
              updateSelectedPark={this.updateSelectedPark}
              user={this.state.user}
            /> } 
          />
            

          <Route exact path='/login' render={(...props) => <Login login={this.login} user={this.state.user} /> } />
          {/* {this.state.user ? <Route path='/profile' render={(...props) => <UserProfile user={this.state.user} logout={this.logout} /> }  /> : null} */}
          {/* {this.state.selectedPark ? <Route path='park' render={(...props) => <ParkCard selectedPark={this.state.selectedPark} />} /> : null} */}
        </Router>
      </div>
    )
  }
}

export default App
