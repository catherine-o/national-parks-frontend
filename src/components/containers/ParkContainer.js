import React from 'react'
import Search from '../Search'
// import ParkCard from '../cards/ParkCard'

export default function ParkContainer({parks, selectedState, updateSelectedState}) {


    return (
        <div>
            <p>{selectedState}</p>
            <Search parks={parks} updateSelectedState={updateSelectedState} />
        </div>
    )
}
