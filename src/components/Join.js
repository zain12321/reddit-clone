import React, { useState } from 'react';
import { RiArrowUpSLine } from 'react-icons/ri';
function Join({ name, num, image }) {
	const [ navbarOpen, setNavbarOpen ] = useState(true);
	const handleToggle = () => {
		setNavbarOpen((prev) => !prev);
	};
	return (
		<div className="flex items-center space-x-2">
			<p>{num}</p>
			<RiArrowUpSLine className="h-6 w-6 text-green-600" />
			<img className="h-7 w-7 rounded-full" src={image} alt="" />
			<p className="text-[#1A1A1B] dark:text-gray-300 flex-1 name">{name}</p>
			<button
				className="rounded-full h-7
       px-4 text-white hover:bg-[#249ece] text-[14px] bg-[#0097D3] 
        font-semibold dark:bg-white dark:text-gray-900"
				onClick={handleToggle}
			>
				<button className="text-center">
					{navbarOpen ? (
						<p className=" font-semibold ">Join</p>
					) : (
						<div className="flex items-center ">
							<span className=''>Joined</span>
						</div>
					)}
				</button>
			</button>
		</div>
	);
}

export default Join;
