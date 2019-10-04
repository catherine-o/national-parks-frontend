import React from 'react'
import ParkCard from '../cards/ParkCard'
import './Container.css'

export default function ParkContainer({parks, selectedState, selectedPark, updateSelectedPark, addParkToBucketlist, removeParkFromBucketlist, bucketlist, memoir, addParkToMemoir, removeParkFromMemoir}) {

    const renderSelectedPark = (park) => {
        return <ParkCard park={park} 
                renderCards={renderCards} 
                selectedState={selectedState} 
                updateSelectedPark={updateSelectedPark} 
                addParkToBucketlist={addParkToBucketlist}
                removeParkFromBucketlist={removeParkFromBucketlist}
                addParkToMemoir={addParkToMemoir}
                removeParkFromMemoir={removeParkFromMemoir}
                bucketlist={bucketlist}
                memoir={memoir}
                />
    }

    const renderCards = (state) => {
        const filteredParks = parks.filter(park => {
            if (park.states.includes(state)) {
                return park
            }
        })
        return filterParks(filteredParks)
    }

    const filterParks = (filteredParks) => {
        return filteredParks.map(park => {
            return <ParkCard key={park.id} 
                    park={park} 
                    selectedPark={selectedPark} 
                    updateSelectedPark={updateSelectedPark} 
                    selectedState={selectedState} 
                    addParkToBucketlist={addParkToBucketlist}
                    removeParkFromBucketlist={removeParkFromBucketlist}
                    addParkToMemoir={addParkToMemoir}
                    removeParkFromMemoir={removeParkFromMemoir}
                    bucketlist={bucketlist}
                    memoir={memoir}
                    />
        })
    }

    return (
        <div className='park-container'>
            {selectedPark 
            ? renderSelectedPark(selectedPark)
            : renderCards(selectedState)}
        </div>
    )
}
