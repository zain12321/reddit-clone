import React, { useState } from 'react'
import RightBar from '../components/RightBar';
import Section from '../components/Section';

function Home() {
  return (
<div>
    <div >    
      
       <div className='flex pt-[80px]
        lg:px-10 xl:px-44 bg-gray-200 dark:bg-black min-h-screen'>
       <Section/>  
        <RightBar/> 
       </div>
        </div> 
 </div>  )
}

export default Home