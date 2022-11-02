import React from 'react';
import { GiCheckedShield } from 'react-icons/gi';

function Premium() {
	return (
		<div className="py-3  bg-white shadow-md mt-2 border dark:bg-[#272729] dark:border-[#333]">
			<div className='flex  space-x-2 px-2'>
				<GiCheckedShield className="text-[#FF4500] h-6 w-6 dark:text-white mt-2" />

				<div className='text-[14px] dark:text-gray-300'>
                  <p>Reddit Premium</p>
                  <p className='w-[260px]'>The best Reddit experience, with monthly Coins</p>
              
                </div>
         
			</div>
            <div className='px-2 py-3'>
  <button className='bg-[#FF4500] w-full h-8 rounded-full text-white font-semibold'>Try Now</button>
</div>

		</div>
	);
}

export default Premium;
