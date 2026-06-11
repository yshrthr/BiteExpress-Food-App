import React from 'react'
import {MdFastfood} from 'react-icons/md'
import {IoSearch} from 'react-icons/io5'
import {LuShoppingBag} from 'react-icons/lu'

function Nav() {
  return (
    <div className='w-full h-[100px] bg-red-50 flex justify-between items-center px-8'>
        <div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl'>
            <MdFastfood className='w-[30px] h-[30px] text-green-500'/>
        </div>
        <form className='w-[70%] h-[60px] bg-white flex items-center padding-x-5 gap-5 rounded-md shadow-xl px-5'>
            <IoSearch className='w-[20px] h-[20px] text-green-500 '/>
            <input type="text" placeholder='Search for food ' className='w-[100%] outline-none text-[20px]'/>
        </form>
        <div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl relative'>
            <span className='absolute top-0 right-2 text-green-500 font-semibold'>0</span>
            <LuShoppingBag  className='w-[30px] h-[30px] text-green-500'/>
        </div>
        
    </div>
  )
}

export default Nav