import React, { useState } from 'react'
import { FaFireAlt, FaRegCommentAlt } from 'react-icons/fa'
import { RiRocketFill, RiShareForwardLine } from 'react-icons/ri'
import { IoIosArrowDown } from 'react-icons/io'
import { IoFlowerOutline } from 'react-icons/io5'
import { AiOutlineToTop
} from 'react-icons/ai'
import { BiCheckboxMinus
} from 'react-icons/bi'
import { BsGift, BsThreeDots, BsThreeDotsVertical } from 'react-icons/bs'
import Menu from '../data'
import { TbArrowBigTop } from 'react-icons/tb'
import { ImCheckboxUnchecked } from 'react-icons/im'


function Posts() {
	const [item, setItem] = useState(Menu);
    let [num, setNum]= useState(0);
    let incNum =()=>{
        if(num<1)
        {
        setNum(Number(num)+1);
        }
      };
      let decNum = () => {
         if(num>0)
         {
          setNum(num - 1);
         }
      }
     let handleChange = (e)=>{
       setNum(e.target.value);
      }

    const filterItem = (category) => {
		const updatedItems = Menu.filter((curElem) => {
		 return curElem.comments === category;
		})
		setItem(updatedItems);
	   };
	
  return (
    <div className='dark:text-gray-300 '>  
      <div className='bg-white flex items-center justify-between
    space-x-1 sm:space-x-3 dark:bg-[#1A1A1B] dark:border-[#333] border rounded-sm mt-3  p-1 
     shadow-sm border-[#cfcccc]'>
        <div>
        <ul className='flex items-center space-x-1 sm:space-x-3 text-gray-500 text-[15px] py-1 px-3 dark:text-gray-300'>
            <li className='best text-blue-600 dark:hover:text-blue-600' 
             exact onClick={() => setItem(Menu)}>
             <RiRocketFill className='b-icon'/><span>Best</span></li>
            <li   onClick={() => filterItem('21')} className='best'><FaFireAlt className='b-icon'/><span>Hot</span></li>
            <li  onClick={() => filterItem('22')} className='best'><IoFlowerOutline className='b-icon'/><span>New</span></li>
            <li   onClick={() => filterItem('19')}  className='best hidden sm:flex'><AiOutlineToTop className='b-icon'/><span>Top</span></li>
<li className='hidden sm:flex p-3 hover:bg-gray-200 dark:hover:bg-[#333]
 dark:hover:text-900  cursor-pointer rounded-full'><BsThreeDots className='b-icon'/></li>
          </ul> 
        </div>
        <div className='hidden sm:flex px-2'>
             <p className='flex items-center space-x-1 p-2 text-gray-500
              hover:bg-gray-100 rounded-full dark:hover:bg-[#333] 
             dark:hover:text-gray-300 cursor-pointer'>
             <BiCheckboxMinus className='h-8 w-8  '/>
             <IoIosArrowDown className='b-icon '/>
             </p>
        </div>
      </div>
      <div className='mt-3 space-y-5'>
      {item?.map((elem) => {
    const { logo, image, title, desc, time, comments} = elem;
	return (
<div className='bg-white shadow-md 
 dark:text-gray-300 border dark:bg-[#272729]
     dark:border-[#333]'>
    <div className='flex '>
       <div className='px-2 border-r '>
  <div className='flex flex-col items-center py-3 text-gray-500 dark:text-gray-300 space-y-3'>
  <button className='cursor-pointer active:text-orange-500'  type="button" onClick={incNum}>
  <TbArrowBigTop  className='h-6 w-6'/></button>
  <input type="text" className="w-[10px] bg-transparent" value={num} onChange={handleChange} />  
  <button type="button" className='cursor-pointer
   active:text-orange-500' onClick={decNum} ><TbArrowBigTop className='rotate-180  h-6 w-6'/></button>

  </div>
       </div>
       <div className=''>
        <div className='px-3 py-2 flex items-center space-x-2'>
            <img src={logo} alt="" className='h-6 w-6 rounded-full' />
            <p className='text-[13px] font-semibold hover:underline'>{title}</p>
            <p className='text-[13px] font-semibold text-gray-400'>{time}</p>
        </div>
               <p className='px-3 py-1 pt-2 text-[17px] font-bold'>
                {desc}
               </p>
               <div>
                <img className='h-[360px] 2xl:h-[500px] w-full 2xl:w-[2000px]' src={image} alt=""/>
               </div>
               <div className='flex text-gray-500 mt-2  pl-3  dark:text-gray-300 items-center
                space-x-4'>
               <p className='comment'>
                <FaRegCommentAlt className='c-icon mt-1'
                />
                <span className='text-[14px]'>{comments}</span>
               </p>
               <p className='comment'>
                <BsGift className='c-icon ' />
                <span>Award</span>
               </p>
               <p className='comment'>
                <RiShareForwardLine className='h-6 w-6' />
                <span>Share</span>
               </p>
               <p className='comment'>
                <ImCheckboxUnchecked className='c-icon' />
                <span>Save</span>
               </p>
               <p className='comment'>
                <BsThreeDotsVertical className='c-icon rotate-90' />
               </p>
               </div>
         </div>
         </div>
          </div>
         )})}
         </div>
       </div>
 )
}

export default Posts