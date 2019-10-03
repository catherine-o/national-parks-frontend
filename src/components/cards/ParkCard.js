import React from 'react'
import ParkDetails from './ParkDetails'
import './Card.css'

export default function ParkCard({park, selectedPark, updateSelectedPark, renderCards, selectedState}) {

    const handleClick = (park) => {
        if (selectedPark === null) {
            updateSelectedPark(park)
        }
    }

    return (
        <div className={selectedPark === null ? 'park-card' : 'active-card'} onClick={() => handleClick(park)}>
            {(selectedPark === null)
                ?   <>
                    <h1>{park.name}</h1>
                    <h2>{park.designation}</h2>  
                    </>
                :   <>
                    <h1>{park.name} {park.designation}</h1> 
                    <ParkDetails park={park} 
                        renderCards={renderCards} 
                        selectedState={selectedState} 
                        updateSelectedPark={updateSelectedPark} 
                        />
                    </>
            }     
        </div>
    )

}
