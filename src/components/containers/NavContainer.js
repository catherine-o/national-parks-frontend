import React from 'react'
import './Nav.css'

export default function NavContainer() {
    return (
        <div className='nav'>
            <button className='nav-arrow'>➤</button>
            <ul className='nav-content'>
                <li>Home</li>
                <li>Bucket</li>
                <li>Login</li>
            </ul>
        </div>
    )
}
