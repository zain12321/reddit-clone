import React from 'react'
import { BsImage } from 'react-icons/bs'
import { BiLink } from 'react-icons/bi'
import profile from '../assets/profile.png'
function CreatePost() {
  return (
    <div className='bg-white flex items-center
  space-x-1 sm:space-x-3 dark:bg-[#1A1A1B] dark:border-[#333] border rounded-sm p-1 
   shadow-sm border-[#cfcccc]'>
<img src={profile} alt="" className='h-10 w-10 rounded-full'/>
<div className='bg-gray-100 rounded-md p-1 dark:bg-[#272729]
       flex items-center space-x-1 flex-1 dark:border dark:border-[#333]'>
        <input type='text' placeholder="Create Post" className='bg-transparent 
     min-w-[100px] outline-none my-1 dark:text-[#D7DADC] sm:flex-grow px-3' />
      </div>
      <BsImage className='crIcon'/>
      <BiLink className='crIcon'/>
    </div>
  )
}

export default CreatePost