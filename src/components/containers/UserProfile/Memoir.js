import React from 'react'
import './UserProfile.css'

export default function Memoir({memoir}) {

    const listParks = () => {
        return memoir.map(m => {
            return <li>{m.park.name} {m.park.designation} - ({m.park.states})</li>
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
