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
                <h4>Climate:</h4>
                <p>{park.weatherInfo}</p>
                <div className='buttons'>
                    <button onClick={openLink}>➤</button>
                    <button onClick={() => handleBack(selectedState)}>Back</button>
                    <button>♡</button>
                </div>
            </div>
        </div>
    )
}
