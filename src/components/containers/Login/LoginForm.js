import React from 'react'
import './Login.css'

export default function LoginForm({username, password, handleChange, handleLoginSubmit, switchForms}) {

    return ( 
        <div className='login'>             
            <form className='login-form' onSubmit={handleLoginSubmit}>
                <label>Username</label>
                <input type='text' name='username' value={username} onChange={handleChange} />
                <label>Password</label>
                <input type='password' name='password' value={password} onChange={handleChange}/>
                <div className='login-buttons'>
                    <h6 className='login-button' onClick={switchForms}>Create New</h6>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    )
}
