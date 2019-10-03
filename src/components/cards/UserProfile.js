import React from 'react'
import './UserProfile.css'

export default function Home({user}) {
    return (
        <div className='profile'>
            <h1>Hi {user.name} </h1>
        </div>
    )
}