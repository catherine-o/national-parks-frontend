import React from 'react'

export default function ParkCard({park}) {
    return (
        <div className='park-card'>
            <h1>{park.name}</h1>
        </div>
    )
}
