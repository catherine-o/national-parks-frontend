import React from 'react'
import './Nav.css'

export default function NavContainer({user, logout, updateSelectedPark, updateSelectedState}) {

    const handleClickHome = () => {
        updateSelectedPark(null)
        updateSelectedState(null)
    }

    const loginLogoutNav = () => {
        return user
            ? <li onClick={() => logout()}>Logout</li>
            : <li>Login</li>
    }

    return (
        <div className='nav'>
            <button className='nav-arrow'>➤</button>
            <ul className='nav-content'>
                <li onClick={handleClickHome}>Home</li>
                <li>List</li>
                <li>Grid</li>
                {loginLogoutNav()}
            </ul>
        </div>
    )
}
