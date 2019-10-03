import React, { Component } from 'react'
import LoginForm from './LoginForm'
import CreateUserForm from './CreateUserForm'
import './Login.css'

export default class LoginContainer extends Component {

    state = {
        username: '',
        name: '',
        password: '',
        createUser: false
    }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    handleLoginSubmit = (event) => {
        event.preventDefault()
        this.props.login(this.state)
        this.setState({
            username: '',
            password: ''
        })
    }

    handleCreateSubmit = (event) => {
        event.preventDefault()
        fetch('https://peaceful-escarpment-43371.herokuapp.com/api/v1/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: this.state.username,
                name: this.state.name,
                password: this.state.password
                })
            })
            .then(response => response.json())
            .then(user => this.props.login(user.user))
    }

    switchForms = () => {
        this.state.createUser === false
        ? this.setState({ createUser: true })
        : this.setState({ createUser: false })
    }


    render() {
        return (
            <div> 
                {this.state.createUser === false
                    ? <LoginForm username={this.state.username} 
                        password={this.state.password} 
                        handleChange={this.handleChange} 
                        handleLoginSubmit={this.handleLoginSubmit} 
                        switchForms={this.switchForms}
                      />
                    : <CreateUserForm username={this.state.username} 
                        name={this.state.name}
                        password={this.state.password} 
                        handleChange={this.handleChange} 
                        handleCreateSubmit={this.handleCreateSubmit}
                        switchForms={this.switchForms}
                      />
                }   
            </div>
        )
    }
}