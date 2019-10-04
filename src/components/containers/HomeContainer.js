import React from 'react'
import ParkContainer from './ParkContainer'
import UserProfile from './UserProfile/UserProfile'

export default function HomeContainer({parks, selectedState, updateSelectedState, selectedPark, updateSelectedPark, user, bucketlist, addParkToBucketlist, removeParkFromBucketlist, memoir, addParkToMemoir, removeParkFromMemoir}) {

    const renderParksOrProfile = () => {
        if(selectedState) {
            return <ParkContainer parks={parks} 
            selectedState={selectedState} 
            updateSelectedState={updateSelectedState}
            selectedPark={selectedPark} 
            updateSelectedPark={updateSelectedPark}
            addParkToBucketlist={addParkToBucketlist}
            removeParkFromBucketlist={removeParkFromBucketlist}
            addParkToMemoir={addParkToMemoir}
            removeParkFromMemoir={removeParkFromMemoir}
            bucketlist={bucketlist}
            memoir={memoir}
            />
        } else if(user) {
            return <UserProfile user={user} bucketlist={bucketlist} memoir={memoir} />
        }
    }

    return (
        <div>
        {renderParksOrProfile()}
        </div>
    )
}
