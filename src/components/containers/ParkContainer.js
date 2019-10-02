import React from 'react'
import ParkCard from '../cards/ParkCard'
import './Container.css'

export default function ParkContainer({parks, selectedState, selectedPark, updateSelectedPark}) {

    const renderPark = (park) => {
        return <ParkCard park={park} />
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
            return <ParkCard key={park.id} park={park} selectedPark={selectedPark} updateSelectedPark={updateSelectedPark} />
        })
    }

    return (
        <div className='park-container'>
            {selectedPark 
            ? renderPark(selectedPark)
            : renderCards(selectedState)}
        </div>
    )
}
