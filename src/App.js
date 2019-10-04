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
    bucketlist: null,
    memoir: null
  }

  login = (user) => {
    fetch('https://peaceful-escarpment-43371.herokuapp.com/api/v1/login', {
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
        bucketlist: user.user.bucketlists.map(bl => bl),
        memoir: user.user.memoirs.map(m => m)
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
    fetch('https://peaceful-escarpment-43371.herokuapp.com/api/v1/bucketlists', {
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
      .then(response => response.json())
      .then(bl => this.setState({ bucketlist: [...this.state.bucketlist, bl] }))
  }

  removeParkFromBucketlist = (park) => {
    const foundBucketlist = this.state.bucketlist.find(bl => JSON.stringify(bl.park) === JSON.stringify(park))
    fetch('https://peaceful-escarpment-43371.herokuapp.com/api/v1/bucketlists/' + foundBucketlist.id, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(this.setState({ bucketlist: this.state.bucketlist.filter(p => JSON.stringify(p) !== JSON.stringify(foundBucketlist))}))
  }

  addParkToMemoir = (park) => {
    fetch('https://peaceful-escarpment-43371.herokuapp.com/api/v1/memoirs', {
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
      .then(response => response.json())
      .then(m => this.setState({ memoir: [...this.state.memoir, m] }))
  }

  removeParkFromMemoir = (park) => {
    const foundMemoir = this.state.memoir.find(m => JSON.stringify(m.park) === JSON.stringify(park))
    fetch('https://peaceful-escarpment-43371.herokuapp.com/api/v1/memoirs/' + foundMemoir.id, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(this.setState({ memoir: this.state.memoir.filter(p => JSON.stringify(p) !== JSON.stringify(foundMemoir))}))
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
              memoir={this.state.memoir}
              addParkToBucketlist={this.addParkToBucketlist}
              removeParkFromBucketlist={this.removeParkFromBucketlist}
              addParkToMemoir={this.addParkToMemoir}
              removeParkFromMemoir={this.removeParkFromMemoir}
            /> } 
          />
            
          <Route exact path='/login' render={(...props) => <LoginContainer login={this.login} user={this.state.user} /> } />
        </Router>
      </div>
    )
  }
}

export default App


const selectImage = (images, path) => {
  path = path || 'images/'; // default path here
  var num = Math.floor( Math.random() * images.length );
  var img = images[ num ];
  return img
}