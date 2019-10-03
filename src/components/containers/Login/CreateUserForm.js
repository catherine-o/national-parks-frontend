import React from 'react'
import './Login.css'

export default function CreateUserForm({username, name, password, handleChange, handleCreateSubmit, switchForms}) {
    return (
        <div className='login'>             
        <form className='login-form' onSubmit={handleCreateSubmit}>
            <label>Username</label>
            <input type='text' name='username' value={username} onChange={handleChange} />
            <label>Name</label>
            <input type='text' name='name' value={name} onChange={handleChange} />
            <label>Password</label>
            <input type='password' name='password' value={password} onChange={handleChange}/>
            <div className='login-buttons'>
                <h6 className='login-button' onClick={switchForms}>Have Account?</h6>
                <button>Submit</button>
            </div>
        </form>
    </div>
    )
}
