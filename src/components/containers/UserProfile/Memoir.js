import React from 'react'
import './UserProfile.css'

export default function Memoir({memoir}) {

    const listParks = () => {
        return memoir.map(park => {
            return <li>{park.name} {park.designation}</li>
        })
    }
    return (
        <div className='profile-list'>
            <h4>Memoir: hit the ✘ to save here</h4>
            <ul>
                {listParks()}
            </ul>
        </div>
    )
}
