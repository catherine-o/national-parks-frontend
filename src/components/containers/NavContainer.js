import React from 'react'
import './Nav.css'

export default function NavContainer({updateSelectedPark, updateSelectedState}) {

    const handleClickHome = () => {
        updateSelectedPark(null)
        updateSelectedState(null)
    }

    return (
        <div className='nav'>
            <button className='nav-arrow'>➤</button>
            <ul className='nav-content'>
                <li onClick={handleClickHome}>Home</li>
                <li>Bucket</li>
                <li>Login</li>
            </ul>
        </div>
    )
}
