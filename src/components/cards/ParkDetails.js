import React from 'react'
import ParkMap from './ParkMap'

export default function ParkDetails({park, renderCards, selectedState, updateSelectedPark}) {

    const openLink = () => {
        window.open(park.url, "_blank")
    }

    const handleBack = (state) => {
        updateSelectedPark(null)
        renderCards(state)
    }

    return (
        <div>
            <ParkMap park={park} />
            <div className='details'>
                <p>{park.description}</p>
                <h3>Climate:</h3>
                <p>{park.weatherInfo}</p>
                <div className='buttons'>
                    <button onClick={openLink}>➤</button>
                    <button onClick={() => handleBack(selectedState)}>Back</button>
                    <button>✘</button>
                    <button>♡</button>
                </div>
            </div>
        </div>
    )
}
