import React from 'react'
import {MdFastfood} from 'react-icons/md'
import {IoSearch} from 'react-icons/io5'
import {LuShoppingBag} from 'react-icons/lu'
import { useContext , useEffect} from 'react'
import { dataContext } from '../context/UserContext'
import { food_items } from '../food'

function Nav() {
  const { inputValue, SetInputValue , Category, SetCategory , showCart, SetShowCart} = useContext(dataContext)
  useEffect(() => {
    const filteredItems = food_items.filter((item) => 
      item.food_name.toLowerCase().includes(inputValue.toLowerCase())
    )
    SetCategory(filteredItems)
  }, [inputValue])

  return (
    <div className='w-full h-[100px] flex justify-between items-center px-8'>
        <div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl'>
            <MdFastfood className='w-[30px] h-[30px] text-green-500'/>
        </div>
        <form className='w-[70%] h-[60px] bg-white flex items-center padding-x-5 gap-5 rounded-md shadow-xl px-5' onSubmit={(e) => e.preventDefault()}>
            <IoSearch className='w-[20px] h-[20px] text-green-500'/>
            <input type="text" placeholder='Search for food ' className='w-[100%] outline-none text-[20px]' value={inputValue} onChange={(e) => SetInputValue(e.target.value)}/>
        </form>
        <div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl relative' onClick={() => SetShowCart(true)}>
            <span className='absolute top-0 right-2 text-green-500 font-semibold'>0</span>
            <LuShoppingBag  className='w-[30px] h-[30px] text-green-500' />
        </div>
        
    </div>
  )
}

export default Nav