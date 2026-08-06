import React from 'react'
import {LuLeafyGreen} from 'react-icons/lu'
import image1 from '../assets/image1.avif'
import {GiChickenOven} from 'react-icons/gi'
import {useDispatch} from 'react-redux'
import { addToCart } from '../redux/cartSlice'

function Card({id,names,image,price,type}) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ id, names, image, price, type }));
  };

  return (
    <div className = "w-[300px] h-[400px] bg-white p-3 rounded-lg flex flex-col gap-3 shadow-2xl hover:border-2 hover:border-green-200 ">
        <div className ="w-[100%] h-[60%] overflow-hidden">
            <img src={image} alt={names} className='object-cover w-full h-full rounded-lg'/>
        </div>
        <div className="text-2xl font-semibold">
            {names}
        </div>
        <div className = "w-full flex justify-between items-center ">
            <div className = "text-lg font-semibold text-green-600 ">Rs {price} /-</div>
            <div className = "text-green-600 font-semibold flex justify-center items-center gap-2">
                {type === 'veg' ? <LuLeafyGreen/> : <GiChickenOven/>}
                <span>{type}</span>
            </div>
        </div>
        <button className='w-full p-3 rounded-lg bg-green-300 text-grey-700 hover:bg-green-600' onClick={handleAddToCart}>
            Add to Cart
        </button>
            
    </div>
  )
}

export default Card