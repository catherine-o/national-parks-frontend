import React from 'react'

export default function Home({user, logout}) {
    return (
        <div>
            <h1>Hi {user.name} </h1>
            <button onClick={() => logout()}>Logout</button>
        </div>
    )
}
