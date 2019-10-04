import React from 'react'
import ParkContainer from './ParkContainer'
import UserProfile from './UserProfile/UserProfile'

export default function HomeContainer({parks, selectedState, updateSelectedState, selectedPark, updateSelectedPark, user, bucketlist, addParkToBucketlist, removeParkFromBucketlist}) {

    const renderParksOrProfile = () => {
        if(selectedState) {
            return <ParkContainer parks={parks} 
            selectedState={selectedState} 
            updateSelectedState={updateSelectedState}
            selectedPark={selectedPark} 
            updateSelectedPark={updateSelectedPark}
            addParkToBucketlist={addParkToBucketlist}
            removeParkFromBucketlist={removeParkFromBucketlist}
            bucketlist={bucketlist}
            />
        } else if(user) {
            return <UserProfile user={user} bucketlist={bucketlist} />
        }
    }

    return (
        <div>
        {renderParksOrProfile()}
        </div>
    )
}
