import React from 'react'
import {LuLeafyGreen} from 'react-icons/lu'
import image1 from '../assets/image1.avif'
import {GiChickenOven} from 'react-icons/gi'
import {useDispatch} from 'react-redux'
import { addToCart } from '../redux/cartSlice'

function Card({id,names,image,price,type}) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    console.log('Adding to cart:', { id, names, image, price, type });
    dispatch(addToCart({ id, names, image, price, type }));
  };

  return (
    <div className="w-[90vw] max-w-[300px] h-[400px] bg-white p-3 rounded-lg flex flex-col justify-between gap-4 shadow-2xl hover:border-2 hover:border-green-200">
      <div className="h-[240px] overflow-hidden rounded-lg">
        <img src={image} alt={names} className='object-cover w-full h-full'/>
      </div>

      <div className='flex-1 flex flex-col justify-between gap-4'>
        <div className='space-y-3'>
          <div className="text-2xl font-semibold break-words">
            {names}
          </div>
          <div className = "w-full flex justify-between items-center">
            <div className = "text-lg font-semibold text-green-600">Rs {price} /-</div>
            <div className = "text-green-600 font-semibold flex justify-center items-center gap-2">
              {type === 'veg' ? <LuLeafyGreen/> : <GiChickenOven/>}
              <span>{type}</span>
            </div>
          </div>
        </div>

        <button className='w-full p-3 rounded-lg bg-green-300 text-gray-700 hover:bg-green-600 active:bg-green-700 transition-colors duration-200 touch-manipulation' onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default Card