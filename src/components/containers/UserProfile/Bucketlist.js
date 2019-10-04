import React from 'react'
import './UserProfile.css'

export default function Bucketlist({bucketlist}) {

    const listParks = () => {
        return bucketlist.map(bl => {
            return <li>{bl.park.name} {bl.park.designation}</li>
        })
    }

    return (
        <div className='profile-list'>
            <h4>Bucketlist: hit the ♡ to save here</h4>
            <ul>
                {listParks()}
            </ul>
        </div>
    )
}
