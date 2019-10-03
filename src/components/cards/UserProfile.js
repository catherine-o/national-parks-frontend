import React from 'react'
import BucketList from '../containers/Bucketlist'
import Memoir from '../containers/Memoir'
import './UserProfile.css'

export default function Home({user}) {
    return (
        <div className='profile'>
            <h1>Hi {user.name} </h1>
            <div className='saves'>
                <BucketList />
                <Memoir />
            </div>
        </div>
    )
}