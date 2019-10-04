import React from 'react'
import ParkMap from './ParkMap'
import './Card.css'

export default function ParkDetails({park, renderCards, selectedState, updateSelectedPark, addParkToBucketlist, removeParkFromBucketlist, bucketlist, memoir, addParkToMemoir, removeParkFromMemoir}) {

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
    
    const handleXButtonClick = () => {
        return JSON.stringify(memoir).includes(JSON.stringify(park))
            ? removeParkFromMemoir(park)
            : addParkToMemoir(park)
    }

    const renderHeartButton = () => {
        const blParks = bucketlist.map(bl => bl.park)
        return JSON.stringify(blParks).includes(JSON.stringify(park))
            ? <button className='selected' onClick={handleHeartButtonClick}>♥</button>
            : <button onClick={handleHeartButtonClick}>♡</button>
    }
    
    const renderXButton = () => {
        const mParks = memoir.map(m => m.park)
        return JSON.stringify(mParks).includes(JSON.stringify(park))
            ? <button className='selected' onClick={handleXButtonClick}>✘</button>
            : <button onClick={handleXButtonClick}>✘</button>
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
                    {renderXButton()}
                    {renderHeartButton()}
                </div>
            </div>
        </div>
    )
}
