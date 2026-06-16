import React from 'react'
import image1 from '../assets/image1.avif'
import { RiDeleteBin6Line } from 'react-icons/ri'

function Card2() {
  return (
    <div className ='w-full h-[120px] p-1 shadow-lg rounded-lg flex justify-between '>
        <div className='w-[60%] h-full flex gap-4'>
            <div className = 'w-[50%] h-full overflow-hidden rounded-lg'>
                <img src={image1} alt='' className='object-cover'/>
            </div>
            <div className='w-[40%] h-full flex flex-col items-center gap-4  '>
                <div className='text-lg text-gray-600 font-semibold'>Food Name</div>
                <div className='w-[100px] h-[50px] bg-slate-400 flex rounded-lg overflow-hidden shadow-lg font-semibold border-2 border-green-300'>
                    <button className='w-[30%] h-full bg-white flex justify-center items-center text-green-400 hover:bg-gray-200'>-</button>
                    <span className='w-[40%] h-full  bg-slate-200 flex justify-center items-center'>1</span>
                    <button className='w-[30%] h-full bg-white flex justify-center items-center text-green-400 hover:bg-gray-200'>+</button>
                </div>
            </div>
        </div>
        <div className='flex flex-col justify-start items-end gap-5'>
            <span className='text-xl font-semibold text-green-400'>Rs 499/-</span>
            <RiDeleteBin6Line className='w-[24px] h-[24px] text-red-500 hover:text-red-700' />
        </div>
    </div>
  )
}

export default Card2