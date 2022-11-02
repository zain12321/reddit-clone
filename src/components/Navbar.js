import React from 'react'

function Navbar() {
  return (
    <div>
    <ul className='flex h-10
   border-b dark:border-b-[#333] 
    text-[14px] font-semibold cursor-pointer
     items-center space-x-8 px-2 sm:px-5 md:px-14 lg:px-24 xl:px-44 text-gray-800 dark:text-gray-300'>
<li className=''>
<span className='border-b-2 pb-2'>OVERVIEW</span>
<span className=''></span>
</li>
<li>POSTS</li>
<li>COMMENTS</li>
<li className='hidden sm:flex'>HISTORY</li>
<li className='hidden sm:flex'>SAVED</li>
<li className='hidden md:flex'>HIDDEN</li>
<li className='hidden lg:flex'>UPVOTED</li>
<li className='hidden lg:flex'>DOWNVOTED</li>
<li className='hidden xl:flex'>AWARDS RECEIVED</li>
<li className='hidden sm:flex'>AWARDS GIVEN</li>
    </ul>
  </div>  )
}

export default Navbar