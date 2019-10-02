import React from 'react'
import Search from '../Search'
import ParkCard from '../cards/ParkCard'

export default function ParkContainer({parks, selectedState, updateSelectedState}) {

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
            return <ParkCard key={park.id} park={park} />
        })
    }

    return (
        <div>
            <Search parks={parks} updateSelectedState={updateSelectedState} />
            {renderCards(selectedState)}
        </div>
    )
}
