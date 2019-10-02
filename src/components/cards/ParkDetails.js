import React from 'react'

export default function ParkDetails({park}) {

    const openLink = () => {
        window.open(park.url, "_blank")
    }

    return (
        <div>
            <p>{park.description}</p>
            <h4>Climate:</h4>
            <p>{park.weatherInfo}</p>
            <button onClick={openLink}>➤</button>
            <button>Back</button>
            <button>♡</button>
        </div>
    )
}
