import React from 'react'
import Nav from '../components/Nav'
import Categories from '../Categories'
import Card from '../components/Card'
import { food_items } from '../food'
import { useState, useEffect ,useContext } from 'react'
import { dataContext } from '../context/UserContext'
import {RxCross2} from 'react-icons/rx'
import Card2 from '../components/Card2'
import { useSelector } from 'react-redux'

function Home() {

  const { Category, SetCategory, showCart, SetShowCart  } = useContext(dataContext)
  const cartItems = useSelector((state) => state.cart.items);

  function filterCategory(category) {
    if(category === 'All') {
      SetCategory(food_items)
    }
    else{
      let newCategory = food_items.filter((item) => item.food_category === category)
      SetCategory(newCategory)
    }
  }
  return (
    <div className='w-full overflow-x-hidden min-h-screen bg-red-50'>
        <Nav />
        <div className='w-full flex flex-wrap justify-center items-center gap-3 px-3 sm:px-4'>
            {Categories.map((item) => {
              return (
                <button
                  type="button"
                  key={item.id}
                  className='w-[100px] sm:w-[120px] h-[110px] sm:h-[130px] bg-white flex flex-col items-start gap-2 p-3 sm:p-5 justify-start text-[14px] sm:text-[17px] text-gray-600 font-semibold rounded-md shadow-xl hover:bg-green-200 active:bg-green-300 active:scale-95 cursor-pointer transition-all focus:outline-none select-none'
                  onClick={() => filterCategory(item.name)}
                >
                  {item.icon}
                  {item.name}
                </button>
              )
            })}
        </div>
        <div className='w-full flex flex-wrap justify-center items-center gap-4 px-3 sm:px-4 mt-10'>
          {Category.map((item)=> {
            return <Card id={item.id} names={item.food_name} image={item.food_image} price={item.price} type={item.food_type}/>
          })}
        </div>
        {showCart && 
        <div className = {`w-full sm:w-[60vw] lg:w-[40vw] h-[100%] overflow-y-auto bg-white fixed top-0 right-0 p-4 transition-all duration-5000 ${showCart ? "translate-x-0" : "translate-x-full"}`}>
          <header className = 'w-[100%] flex justify-between items-center '>
            <span className='font-semibold text-[18px]'>Order Items</span>
            <RxCross2 className='w-[24px] h-[24px] font-semibold text-[18px] hover:text-red-500' onClick={() => SetShowCart(false)}/>
          </header>
          {cartItems.map((item) => (
            <Card2
              id={item.id}
              names={item.names}
              image={item.image}
              price={item.price}
              type={item.type}
              quantity={item.quantity}
            />
          ))}
          <footer className='w-full flex-col justify-between items-center mt-4 gap-3'>
            <div className='w-full flex justify-between items-center mt-4'>
              <span className='font-semibold text-[28px]'>Total</span>
              <span className='font-semibold text-[28px]'>Rs {cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)} /-</span>
            </div>
            <button className='w-[75%] p-3 rounded-lg bg-green-300 text-grey-700 hover:bg-green-600 active:bg-green-700 transition-colors duration-200 touch-manipulation mt-4'>Place Order</button>
          </footer>
        </div>
        }
    </div>
  )
}

export default Home