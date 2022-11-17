import React from 'react'
import Right from '../assets/right.png'
import Community from './Community'
import Footer from './Footer'
import Join from './Join'
import Premium from './Premium'
function RightBar() {
  return (
    <div className='hidden lg:flex flex-col mb-[400px] w-[290px] space-y-5'>
      <div className='bg-white dark:text-gray-300 rounded-tl-[10px] rounded-tr-[10px] 
      shadow-sm border dark:border-[#333]
      dark:bg-[#272729]'>
<div className='flex flex-col'>
      <img className='h-[60px] w-full rounded-tl-[10px] rounded-tr-[10px]' 
      src={Right} alt='' />
      <p className='absolute mt-7 ml-4 text-white font-semibold'>Today's Top Growing Communities</p>
      </div>

      <div className='p-3 space-y-2'>
      <Join  image={'https://b.thumbs.redditmedia.com/lTgz7Yx_6n8VZemjf54viYVZgFhW2GlB6dlpj1ZwKbo.png'}
       name={'r/mildlyinte'} num={'1'}  />
       <Join  image={'https://a.thumbs.redditmedia.com/kIpBoUR8zJLMQlF8azhN-kSBsjVUidHjvZNLuHDONm8.png'}
       name={'r/funnywwoppo4opo4po4p4popk'} num={'2'}  /><Join  image={'https://styles.redditmedia.com/t5_2qh87/styles/communityIcon_ub69d1lpjlf51.png'}
       name={'r/spacemlwweooo44'} num={'3'}  /><Join  image={'https://styles.redditmedia.com/t5_2qh13/styles/communityIcon_pldiwqvsyns91.png'}
       name={'r/worldnenfjnjnr'} num={'4'}  /><Join  image={'https://b.thumbs.redditmedia.com/b19-jQLBsVc2-EQfPx5WEQkYIL_clR0mhba4-pHT0AA.png'}
       name={'r/DamntheScored'} num={'5'}  />
      </div>

<div className='px-2 py-3'>
  <button className='bg-[#0097D3] w-full h-8 rounded-full text-white font-semibold'>View All</button>
</div>
<ul className=' flex items-center lg:space-x-2 xl:space-x-2 px-3 pb-3'>
  <li className='Four'>Near You</li>
  <li className='Four'>Gaming</li>
  <li className='Four'>Sports</li>
  <li className='Four'>Aww</li>

</ul>
      </div>
<Premium/>
<Community/>
<Footer/>
    </div>
  )
}

export default RightBar