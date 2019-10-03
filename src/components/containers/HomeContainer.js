import React from 'react'
import ParkContainer from './ParkContainer'
import UserProfile from './UserProfile/UserProfile'

export default function HomeContainer({parks, selectedState, updateSelectedState, selectedPark, updateSelectedPark, user}) {

    const renderParksOrProfile = () => {
        if(selectedState) {
            return <ParkContainer parks={parks} 
            selectedState={selectedState} 
            updateSelectedState={updateSelectedState}
            selectedPark={selectedPark} 
            updateSelectedPark={updateSelectedPark}
            />
        } else if(user) {
            return <UserProfile user={user} />
        }
    }

    return (
        <div>
        {renderParksOrProfile()}
        </div>
    )
}
