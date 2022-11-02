import React from 'react'
import space from '../assets/space.png'
function Community() {
  return (
    <div className='mt-2 bg-white pb-2 dark:bg-[#272729]'>
       <div className='flex flex-col'>
        <img className='h-10 ' src={space} alt='' />
        <div className='absolute mt-5 ml-2 flex items-center space-x-5'>
        <img className='h-[90px] w-[70px]' src='https://www.redditstatic.com/desktop2x/img/id-cards/snoo-home@2x.png' alt=''/>
        <p className='mt-3 text-[15px] text-black font-medium dark:text-gray-300'>Home</p>
        </div>
       </div>
       <div className='pt-[75px] text-black dark:text-gray-300 text-[15px] px-3'>
       Your personal Reddit frontpage. Come here to check in with your favorite communities.

       </div>
  <div className='px-2 py-1'>
  <button className='bg-[#0097D3] w-full h-8 rounded-full text-white font-semibold'>Create Post</button>
</div>
  <div className='px-2 py-1'>
  <button className='bg-transparent w-full h-8 rounded-full border-2 border-[#0097D3]
  text-[#0097D3]'>Create Community</button>
</div>
    </div>
  )
}

export default Community