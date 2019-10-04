import React from 'react'
import ParkMap from './ParkMap'
import './Card.css'

export default function ParkDetails({park, renderCards, selectedState, updateSelectedPark, addParkToBucketlist, removeParkFromBucketlist, bucketlist}) {

    const openLink = () => {
        window.open(park.url, "_blank")
    }

    const handleBackButtonClick = (state) => {
        updateSelectedPark(null)
        renderCards(state)
    }

    const handleHeartButtonClick = () => {
        return JSON.stringify(bucketlist).includes(JSON.stringify(park))
            ? removeParkFromBucketlist(park)
            : addParkToBucketlist(park)
    }

    const renderHeartButton = () => {
        return JSON.stringify(bucketlist).includes(JSON.stringify(park))
            ? <button className='selected' onClick={handleHeartButtonClick}>♥</button>
            : <button onClick={handleHeartButtonClick}>♡</button>
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
                    <button onClick={() => handleBackButtonClick(selectedState)}>Back</button>
                    <button>✘</button>
                    {renderHeartButton()}
                </div>
            </div>
        </div>
    )
}
