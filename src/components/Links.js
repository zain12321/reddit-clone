import React from 'react'

function Links({logo, name, desc, active}) {
  return (
   
      <div className={`rounded-full border w-[200px]
       flex-grow pr-2 flex space-x-2 items-center 
       text-[14px] font-semibold hover:shadow-xl cursor-pointer 
       ${active ? 'hidden sm:flex' : 'flex' }`}>
           <img className='h-10 w-10 rounded-full' src={logo} alt=''
           />
           <div className='px-1'>
             <p className='text-[#1C1C1C] dark:text-gray-300 text-[13px]
             '>{name}</p>
             <p className='text-[#377577] text-[12px]'>
             <span className='text-[#FF4500] pr-1  '>
             Talk</span>{desc}</p>
           </div>
      </div>
  )
}

export default Links