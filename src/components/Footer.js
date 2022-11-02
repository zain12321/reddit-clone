import React from 'react'

function Footer() {
  return (
    <div className='sticky top-12'>
        <div className='bg-white shadow-md p-2 py-1  dark:text-gray-300 border dark:bg-[#272729]
     dark:border-[#333]'>
     <div className='flex  space-x-4 px-3 text-[14px] border-b pb-3'>
     <p>User Agreement
Privacy Policy</p>
<p>Content Policy
Moderator Code Of Conduct</p>
     </div>
     <div className='flex  px-3 pr-[106px] justify-between text-[14px] border-b pb-3 py-3'>
        <p className='flex flex-col'>
        <span>English</span>
        <span>Français</span>
        <span>Italiano</span>
        </p>
        <p className='flex flex-col pl-2'>
        <span>Deutsch</span>
        <span>Español</span>
        <span>Português</span>
        </p>
     </div>
<div className='px-3 py-1 text-[15px]'>
Reddit Inc © 2022. All rights reserved
</div>
     </div>
    </div>
  )
}

export default Footer