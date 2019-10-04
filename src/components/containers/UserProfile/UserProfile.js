import React from 'react'
import BucketList from './Bucketlist'
import Memoir from './Memoir'
import './UserProfile.css'

export default function Home({user}) {
    return (
        <div className='profile'>
            <h1>Hi {user.name} </h1>
            <div className='saves'>
                <BucketList user={user} />
                <Memoir />
            </div>
        </div>
    )
}