import React from 'react'
import Avatar from '../components/Avatar'
import Navbar from '../components/Navbar'
import ProfilePost from '../components/ProfilePost'

function Profile() {
  return (
    <div className='pt-16'>
         <Navbar/>
         <div className='flex space-x-5 px-24'>
          <ProfilePost/>
         <Avatar/>
         </div>
    </div>
  )
}

export default Profile