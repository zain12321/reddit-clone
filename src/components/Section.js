import React from 'react'
import CreatePost from './CreatePost'
import Links from './Links'
import Posts from './Posts'

function Section() {
  return (
    <div className='flex-1 px-5 lg:mx-0 mb-14'>
        <CreatePost/>
        <div className='bg-white mt-3 border-[#cfcccc] flex dark:border 
        space-x-2 dark:bg-[#272729] dark:border-[#333] px-2 py-3'>
        <Links 
           logo={'https://styles.redditmedia.com/t5_70gnl4/styles/communityIcon_05htzjyf73n91.png'}
           name={'Mental Health Judgement Free Zone'}
           desc={'34 r/Mental Health Hel_Section'}
        />
         <Links 
           active
           logo={'https://styles.redditmedia.com/t5_73j0bs/styles/communityIcon_c7ed2m86v3q91.png'}
           name={'Mental Health Judgement Free Zone'}
           desc={'34 r/Mental Health Hel_Section'}
        /> 
        </div>
        <Posts/>
    </div> 
  )
}

export default Section