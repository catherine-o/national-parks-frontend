import React from 'react'
import BucketList from './Bucketlist'
import Memoir from './Memoir'
import './UserProfile.css'

export default function UserProfile({user, bucketlist}) {
    return (
        <div className='profile'>
            <h1>Hi {user.name} </h1>
            <div className='saves'>
                <BucketList bucketlist={bucketlist} />
                <Memoir />
            </div>
        </div>
    )
}