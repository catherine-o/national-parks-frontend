import React from 'react'
import './Card.css'

export default function ParkCard({park}) {
    return (
        <div className='park-card'>
            <h1>{park.name}</h1>
            <h2>{park.designation}</h2>
        </div>
    )
}
