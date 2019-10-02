import React, { Component } from 'react'

export default class Login extends Component {

    state = {
        username: '',
        password: ''
    }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.login(this.state)
        this.setState({
            username: '',
            password: ''
        })
    }

    render() {
        return (
                <div>             
                <form className='login-form' onSubmit={this.handleSubmit}>
                        <label>Username</label>
                        <input type='text' name='username' value={this.state.username} onChange={this.handleChange} />
                        <label>Password</label>
                        <input type='password' name='password' value={this.state.password} onChange={this.handleChange}/>
                        <input type='submit' />
                    </form>
                </div>
        )
    }
}
