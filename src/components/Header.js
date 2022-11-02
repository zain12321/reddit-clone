import React, { useState } from 'react'
import logo2 from '../assets/logo2.png'
import logo1 from '../assets/logo1.png'
import logo3 from '../assets/logo3.jpg'
import logo4 from '../assets/logo4.jpg'
import {HiHome, HiOutlineSpeakerphone} from 'react-icons/hi' 
import {MdKeyboardArrowDown, MdDarkMode} from 'react-icons/md'
import {BsArrowUpRightCircle} from 'react-icons/bs'
import {IoMdNotificationsOutline} from 'react-icons/io'
import {FaRegCommentDots} from 'react-icons/fa'
import {AiOutlinePlus} from 'react-icons/ai'
import {CiSearch} from 'react-icons/ci'
import {GiSpotedFlower} from 'react-icons/gi'
import {CgProfile} from 'react-icons/cg'
import { Link } from 'react-router-dom'

function Header({darkTheme, setDarkTheme}) {
  const [change, setChange] = useState(true)
  return (
    <header className='px-1 sm:px-4 dark:border-b dark:border-b-[#333]
    py-1 shadow-md h-14 w-full fixed bg-white
     dark:bg-black flex items-center justify-between space-x-1 sm:space-x-2 z-50'>
      <div className='flex items-center text-gray-900 dark:text-gray-300
     space-x-1 sm:space-x-5 bg-gray-100 dark:bg-black py-1'>
     <Link to='/'>
<div className=''>
{darkTheme ? 
  <img src={logo4} alt="" className='flex sm:hidden h-10 w-[50px]' /> :
<img src={logo1} alt="" className='flex sm:hidden h-8 w-[40px]' /> 
}
  {darkTheme ? 
    <img src={logo3} alt="" className='hidden sm:flex h-9 w-24' /> :
     <img src={logo2} alt="" className='hidden sm:flex h-12 w-24' /> 
  }
</div>
</Link>
   <div className='flex items-center space-x-2  dark:bg-black'>
   <HiHome className="hIcon hidden md:flex" />
    <input type='text' placeholder="Home" className='hidden md:flex bg-transparent
     font-semibold py-1 placeholder:text-black placeholder:dark:text-white outline-none ' />
    <MdKeyboardArrowDown className="hIcon hidden sm:flex" />
   </div>
      </div>
      <div className='bg-gray-100 rounded-full p-1 dark:bg-[#272729]
       flex items-center space-x-1 flex-1 dark:border dark:border-[#333]'>
      <CiSearch className="hIcon dark:text-gray-300"/>
        <input type='text' placeholder="Search Reddit" className='bg-transparent 
     min-w-[100px] outline-none my-1 dark:text-[#D7DADC] flex-grow px-1 sm:px-2' />
      </div>
      <div className='flex items-center space-x-2 text-gray-700
      dark:text-white'>
    <BsArrowUpRightCircle className='hIcons hidden sm:flex' />
    <MdDarkMode onClick={() => setDarkTheme(!darkTheme)} className='hIcons hidden sm:flex'/>
    <p className='hIcons hidden sm:flex'>🍌</p>
    <p className='border-r h-9 border-gray-200 dark:border-[#333] small'></p>
    <FaRegCommentDots className='hIcons small'/>
    <IoMdNotificationsOutline className='hIcons small'/>
   <AiOutlinePlus className='hIcons small '/>
      </div>
      <div className='flex items-center space-x-2'>
        <div className='hidden 
        bg-gray-200 text-gray-500 rounded-full hover:gray-400 py-2 px-2 xl:flex items-center space-x-2'>
        <HiOutlineSpeakerphone className='h-5 w-5 text-gray-800'/>
        <p>Advertiser</p>
        </div>
        <div onClick={() => setChange(!change)} className='flex cursor-pointer border p-[2px]
         space-x-2 px-1 dark:border-[#333]'>
            <p className='flex items-center'>
            <img src="https://styles.redditmedia.com/t5_6uifpg/styles/profileIcon_wpy08py3w4x91.jpg?width=256&height=256&frame=1&crop=256:256,smart&s=032b0954adf4eb2b2f788fa0029321922d51d5fe"
             alt=""
             className='h-7 w-7 rounded-md'
             />
             <span className='h-2 w-2 sm:h-3 sm:w-3  bg-green-500 absolute ml-[18px] mt-8 sm:mt-4
              rounded-full border-2'></span>
            </p>
             <div className='hidden lg:flex items-center justify-between text-sm '>
                 <h1 className=' flex flex-col'>
                  <span className='font-semibold dark:text-gray-300'>ComprehensivePart113 </span>
                  <span className='flex items-center  text-gray-400 text-xs'>
                  <GiSpotedFlower className='mr-1 text-red-700'/>1 karma</span>
                 </h1>
                 <MdKeyboardArrowDown className='h-5 w-5 mt-2 dark:text-gray-200'/>
             </div>
        </div>
      </div>
      <div>
        {change ? '' : <div className='absolute 
         overflow-hidden rounded-md pt-3 top-12 right-5 h-[100px] w-[230px]
         bg-white dark:bg-[#eee] shadow-2xl text-black'>
         <Link to='/profile'>
<p className='flex items-center space-x-2 text-gray-600 justify-between p-2
 hover:bg-gray-100  cursor-pointer'>
<span>Profile</span>
<CgProfile className='h-5 w-5 '/>
</p>
</Link>
<p onClick={() => setDarkTheme(!darkTheme)}  className='flex items-center space-x-2
 text-gray-600 justify-between p-2
 hover:bg-gray-100 cursor-pointer'>
<span>Dark Mode</span>
<MdDarkMode className='hIcons '/>

</p>

      </div>
      }
      </div>
    </header>
  )
}

export default Header