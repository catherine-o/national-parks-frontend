import React from 'react'

export default function ParkDetails({park}) {
    return (
        <div>
            <p>{park.description}</p>
            <h4>Climate:</h4>
            <p>{park.weatherInfo}</p>
        </div>
    )
}
