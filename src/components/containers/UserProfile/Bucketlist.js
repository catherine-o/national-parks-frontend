import React from 'react'
import './UserProfile.css'

export default function Bucketlist({bucketlist}) {

    const listParks = () => {
        return bucketlist.map(park => {
            return <li>{park.name} {park.designation}</li>
        })
    }

    return (
        <div className='bucketlist'>
            <h4>Bucketlist: hit the ♡ to save here</h4>
            <ul>
                {listParks()}
            </ul>
        </div>
    )
}
